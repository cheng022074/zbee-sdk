
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
 * @import isProcessiveMessage from is.message.processive
 * 
 * @import isCancelProcessiveMessage from is.message.processive.cancel
 * 
 * @import isReplyMessage from is.message.reply
 * 
 * @import isReplySuccessMessage from is.message.reply.ok
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
     sendMessages,
 } = me;

 if(isSendMessage(message)){

    let {
        id,
        to
    } = message ;

    if(addresses.hasOwnProperty(to)){

        if(isProcessiveMessage(message) && message.cancel === true){

            if(processivePromises.hasOwnProperty(id)){

                processivePromises[id].cancel() ;

                delete processivePromises[id] ;
            }

            me.replySuccess(message) ;

        }else{

            let result = addresses[to].receive(message) ;

            if(isPromise(result)){

                result.then(result => me.replySuccess(message , result)) ;

                if(isProcessivePromise(result)){

                    processivePromises.set(id , result) ;
                }

            }else{

                me.replySuccess(message , result) ;
            }
        }
    
    }else if(concatenateChannels.length){

        concatenateChannels.call('send' , message) ;
    
    }else{

        me.replyFailure(message) ;
    }
 
 }else if(isReplyMessage(message)){

    if(isReplySuccessMessage(message)){

        if(sendMessages.hasOwnProperty(id)){

            let result = addresses[from].reply(message);

            if(isSendMessage(message) || isCancelProcessiveMessage(message)){

                delete sendMessages[id] ;
            
            }else{

                sendMessages[id] = message ;
            }

            me.fireEvent('message' , result , message) ;
        
        }else if(concatenateChannels.length){

            concatenateChannels.call('onReceive' , message) ;
        }

    }else if(isReplyFailureMessage(message)){

        if(sendMessages.hasOwnProperty(id)){

            let {
                reconnection,
                processive
            } = message ;

            if(reconnection){

                let method = processive ? 'connect' : 'send' ;

                setTimeout(() => me[method](message) , reSendDelay) ; 
            
            }else{

                delete sendMessages[id] ;

                me.fireEvent('messageerror' , message) ;
            }
        
        }else if(concatenateChannels.length){

            concatenateChannels.call('onReceive' , message) ;
        }
    }
 }