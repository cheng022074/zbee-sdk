
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
 * @import isReplyMessage from is.message.reply
 * 
 * @import isReplySuccessMessage from is.message.reply.ok
 * 
 * @import isReplyFailureMessage from is.message.reply.failure
 * 
 * @import is.promise
 * 
 * @param {data.Message} message 消息对象
 * 
 */

 let me = this,
 {
     addresses,
     reSendDelay
 } = me;

 if(isSendMessage(message)){ // 当前消息为发送信息

    if(addresses.hasOwnProperty(to)){

        let result = addresses[to].receive(message) ;

        if(isPromise(result)){

            result.then(result => me.reply(message , result)) ;

        }else if(isDefined(result)){

            me.reply(message , result) ;
        }
    
    }else{

        // 使用关联消息通道再发送
    }
 
 }else if(isReplyMessage(message)){ // 当前消息为回复信息

    if(isReplySuccessMessage(message)){

        if(addresses.hasOwnProperty(from)){

            let result = addresses[from].reply(message),
                {
                    id
                } = message;
    
            if(isDefined(result)){
    
                me.fireEvent('message' , id , result) ;
            }
        
        }else{

            
        }
    }
 }

 if(isDefined(address)){

    let {
        concatenateChannels
    } = me ;

    if(addresses.hasOwnProperty(address)){

        if(received === false){

            if(reSend){

                setTimeout(() => me.send(to , data , {
                    reSend,
                    fromAddress:address
                }) , reSendDelay) ; 
            }   
            
        }else{

            addresses[address](message) ;
        }
    
    }else if(isBoolean(received)){
    
        concatenateChannels.call('onReceive' , message) ;
    
    }else{
    
        concatenateChannels.call('send' , to , data , {
            reSend,
            fromAddress:from
        }) ;
    }

 }