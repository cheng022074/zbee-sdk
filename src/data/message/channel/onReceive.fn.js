
/**
 * 
 * 接收消息
 * 
 * @import is.boolean
 * 
 * @import is.defined
 * 
 * @param {data.Message} message 消息对象
 * 
 */

 let me = this,
 {
     addresses,
     reSendDelay
 } = me,
 {
    from,
    to,
    data,
    replyData,
    reSend,
    received
 } = message,
 address;

 if(isBoolean(received)){

    if(received === true){

        if(isDefined(replyData)){

            address = from ;
        }
    
    }else if(reSend === true){

        setTimeout(() => me.send(to , data , {
            reSend,
            fromAddress:from
        }) , reSendDelay) ;
    }
 
 }else{

    address = to ;
 }

 if(isDefined(address) && addresses.hasOwnProperty(address)){

    addresses[to](message) ;
 }