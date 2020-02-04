
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
        id
    } = message ;

    if(addresses.hasOwnProperty(to)){

        if(isSendProcessiveMessage(message) && message.cancel === true){

            if(processivePromises.hasOwnProperty(id)){

                processivePromises[id].cancel() ;

                delete processivePromises[id] ;
            }

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
    
            me.fireEvent('message' , id , result) ;

            if(!isSendProcessiveMessage(message)){

                delete sendMessages[id] ;
            }
        
        }else if(concatenateChannels.length){

            concatenateChannels.call('onReceive' , message) ;
        }

    }else if(isReplyFailureMessage(message)){

        if(addresses.hasOwnProperty(from)){

            let {
                reconnection,
                processive
            } = message ;

            if(reconnection){

                let method = processive ? 'connect' : 'send' ;

                setTimeout(() => me[method](message) , reSendDelay) ; 
            }
        
        }else if(concatenateChannels.length){

            concatenateChannels.call('onReceive' , message) ;
        }
    }
 }