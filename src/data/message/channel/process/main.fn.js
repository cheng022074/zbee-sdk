
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
 * @import isReplySuccessProcessiveMessage from is.message.reply.success.processive
 * 
 * @import isReplyFailureMessage from is.message.reply.failure
 * 
 * @import isCancelProcessiveMessage from is.message.processive.cancel
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

        super({
            ...options,
            initFn(){

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
        }) ;
    }

    doReceive(receive){

        let {
            childProcesses
        } = this ;

        for(let childProcess of childProcesses){

            childProcess.on('message' , message =>{

                if(isReplySuccessProcessiveMessage(message)){

                    receive(message) ;
                }

            }) ;
        }
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

            if(isReplyFailureMessage(message)){

                failureMessage = replyMessage ;
            
            }else if(!isReplySuccessProcessiveMessage(replyMessage)){

                me.receive(replyMessage) ;
                
                return ;
            
            }
        }

        me.receive(failureMessage) ;
    }
 }