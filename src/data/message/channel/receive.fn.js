
/**
 * 
 * 接收消息
 * 
 * @import is.boolean
 * 
 * @import is.defined
 * 
 * @import isSendMessage from is.message.send
 * 
 * @import isSendProcessiveMessage from is.message.send.processive
 * 
 * @import isSendCancelProcessiveMessage from is.message.send.processive.cancel
 * 
 * @import isReplyMessage from is.message.reply
 * 
 * @import isReplySuccessMessage from is.message.reply.success
 * 
 * @import isReplySuccessCancelProcessiveMessage from is.message.reply.success.processive.cancel
 * 
 * @import isReplySuccessProcessiveMessage from is.message.reply.success.processive
 * 
 * @import isReplyFailureMessage from is.message.reply.failure
 * 
 * @import is.promise
 * 
 * @import isProcessivePromise from is.promise.processive
 * 
 * @param {data.Message} message 消息对象
 * 
 */

 let me = this,
 {
     addresses,
     reSendDelay,
     concatenateChannels,
     processivePromises,
     messages,
 } = me,{
    id,
    from,
    to
} = message ;

 if(isSendMessage(message)){

    if(addresses.hasOwnProperty(to)){

        if(isSendCancelProcessiveMessage(message)){

            if(processivePromises.hasOwnProperty(id)){

                processivePromises[id].cancel() ;

                delete processivePromises[id] ;
            }

            me.replySuccess(message) ;

        }else{

            let result = addresses[to].receive(message.params , message) ;

            if(isPromise(result)){

                result.then(result => me.replySuccess(message , result)) ;

                if(isProcessivePromise(result)){

                    if(isSendProcessiveMessage(message)){

                        processivePromises[id] =  result ;
                    
                    }else{

                        result.then(() => result.cancel()) ;
                    }
                }

            }else{

                me.replySuccess(message , result) ;
            }
        }
    
    }else if(concatenateChannels.length){

        concatenateChannels.call('doSend' , message) ;
    
    }else{

        me.replyFailure(message) ;
    }
 
 }else if(isReplyMessage(message)){

    if(isReplySuccessMessage(message)){

        if(messages.hasOwnProperty(id)){

            let result = addresses[from].reply(message.result , message);

            if(!isReplySuccessProcessiveMessage(message)){

                delete messages[id] ;
            
            }else{

                if(!message.hasOwnProperty('count')){

                    message.count = 0 ;

                    me.fireEvent('messagestart' , message) ;
                }

                message.count ++ ;
            }

            if(isReplySuccessCancelProcessiveMessage(message)){

                me.fireEvent('messageend' , message) ;
            
            }else{

                me.fireEvent('message' , result , message) ;
            }

        }else if(concatenateChannels.length){

            concatenateChannels.call('doSend' , message) ;
        }

    }else if(isReplyFailureMessage(message)){

        if(messages.hasOwnProperty(id)){

            let {
                reconnection,
                processive
            } = message ;

            if(reconnection){

                let method = processive ? 'connect' : 'send' ;

                setTimeout(() => me[method](message) , reSendDelay) ; 
            
            }else{

                delete messages[id] ;

                me.fireEvent('messageerror' , message) ;
            }
        
        }else if(concatenateChannels.length){

           concatenateChannels.call('doSend' , message) ;
        }
    }
 }