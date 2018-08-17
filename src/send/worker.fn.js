
/**
 * 
 * 向主进程发送调用其它工作进程的指令
 * 
 * @import getId from send.id
 * 
 * @param {string} entry 调用工作进程的函数名称
 * 
 * @param {mixed[]} [...args] 函数参数列表
 * 
 * @return {Promise}
 * 
 */

let currentId = getId() ;

return new Promise((resolve , reject) =>{

    let onMessage = ({
        type,
        id,
        data
    }) =>{

        if(type === 'worker-send-result' && currentId === id){

            resolve(data) ;
        
            worker.off('message' , onMessage) ;

            worker.off('error' , reject) ;
        }
    };

    worker.on('message' , onMessage) ;

    worker.on('error' , reject) ;
    
    process.send({
        type:'worker-send',
        id:currentId,
        data:{
            entry,
            args
        }
    }) ;
}) ;
