
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

    if((received && isDefined(replyData)) || !received){

        address = from ;

    }
 
 }else{

    address = to ;
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