
/**
 * 
 * 消息通道主进程版
 * 
 * @import from from array.from
 * 
 * @import isObject from is.object.simple
 * 
 * @import Channel from data.message.channel value
 * 
 * @import isReplySuccessMessage from is.message.reply.ok
 * 
 * @param {object} config 配置 
 * 
 */

 const {
    fork
 } = require('child_process') ;

 class main extends Channel{

    constructor({
        childProcesses,
        ...options
    }){

        super(options) ;

        childProcesses = from(childProcesses);

        let {
            length
        } = childProcesses ;

        for(let i = 0 ; i < length ; i ++){

            let childProcess = childProcesses[i] ;

            if(isObject(childProcess)){

                let {
                    path,
                    args,
                    ...options
                } = childProcess ;

                childProcesses[i] = fork(path , args , options) ;
            }
        }

        this.childProcesses = childProcesses ;
    }

    doReceive(){
    }

    async doSend(message){

        let me = this,
        {
            childProcesses
        } = me,
        failureMessage;

        for(let childProcess of childProcesses){

            childProcess.send(message) ;

            let replyMessage = await new Promise(callback =>{

                let {
                    id
                } = message,
                onMesage = (replyMessage) =>{
    
                    if(replyMessage.id === id){

                        childProcess.off('message' , onMesage) ;
    
                        callback(replyMessage) ;
                        
                    }
                };
    
                childProcess.on('message' , onMesage) ;

            }) ;

            if(isReplySuccessMessage(replyMessage)){

                me.receive(replyMessage) ;

                return ;
            
            }else{

                failureMessage = replyMessage ;
            }
        }

        me.receive(failureMessage) ;
    }
 }