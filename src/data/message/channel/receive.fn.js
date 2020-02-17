
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
     rootAddress
 } = me,{
    id,
    from,
    to
} = message ;

message.channels.push(rootAddress) ;

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
    
    }else if(!concatenateChannels.call('forward' , message).includes(true)){

        me.replyFailure(message) ;
    }
 
 }else if(isReplyMessage(message)){

    if(isReplySuccessMessage(message)){

        if(messages.hasOwnProperty(id)){

            let result = addresses[from].reply(message.result , message);

            if(!isReplySuccessProcessiveMessage(message)){

                delete messages[id] ;
            
            }else{

                if(message.count === 0){

                    me.fire('messagestart' , message) ;
                }

                message.count ++ ;
            }

            if(isReplySuccessCancelProcessiveMessage(message)){

                me.fire('messageend' , message) ;
            
            }else{

                me.fire('message' , message , result) ;
            }

        }else{

            concatenateChannels.call('forward' , message) ;
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

                me.fire('messageerror' , message) ;
            }
        
        }else{

            concatenateChannels.call('forward' , message) ;
        }
    }
 }