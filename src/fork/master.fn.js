
/**
 * 
 * 主进程维护
 * 
 * @import forkWorker from fork.worker
 * 
 * @import getId from send.id
 * 
 * @param {array} workerNames 工作进程名称集合
 * 
 * @scoped
 * 
 */

function main(workerNames){

    let workers = {} ;

    for(let workName of workerNames){

        workers[workName] = new Worker(workName , workers) ;
    }

    return workers ;
}

let count = 0 ;

class Worker{

    constructor(name , workers){

        let me = this ;

        me.workers = workers ;
        
        me.initWorker(name) ;

        let {
            worker
        } = me ;

        worker.on('exit' , () =>{

            me.initWorker(name) ;
    
        }) ;
    }

    initWorker(name){

        let me = this,
            worker = me.worker = forkWorker(name),
            {
                workers
            } = me;

        worker.setMaxListeners(Number.MAX_VALUE) ;

        worker.on('message' , ({
            type,
            id,
            data
        }) =>{

            if(type === 'worker-send'){

                let {
                    entry,
                    args
                } = data;

                if(workers.hasOwnProperty(entry)){

                    workers[entry].send(...args).then(data =>{

                        worker.send({
                            type:'worker-send-result',
                            id,
                            data
                        }) ;

                    }) ;

                }else{

                    worker.send({
                        type:'worker-send-result',
                        id
                    }) ;
                }
            }

        }) ;

        worker.on('exit' , () =>{

            me.initWorker(name) ;
    
        }) ;
    }

    send(){

        let me = this,
            args = Array.from(arguments),
            {
                worker
            } = me,
            currentId = getId();

        return new Promise((resolve , reject) =>{

            let onMessage = ({
                type,
                id,
                data
            }) =>{

                if(type === 'master-send-result' && currentId === id){

                    resolve(data) ;
                
                    worker.off('message' , onMessage) ;
    
                    worker.off('error' , reject) ;
                }
            };
    
            worker.on('message' , onMessage) ;

            worker.on('error' , reject) ;
    
            worker.send({
                type:'master-send',
                id:currentId,
                data:args
            }) ;

        }) ;
    }
}