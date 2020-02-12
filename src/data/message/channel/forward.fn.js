
/**
 * 
 * 转发消息
 * 
 * @import isForwarded from data.message.is.forwarded
 * 
 * @import forward from data.message.forward
 * 
 * @param {data.Message} message 消息体
 * 
 * @return {boolean} 如果转发成功则返回 true , 否则返回 false
 * 
 */


 let me = this,
 {
    proxy
 } = me ;

 if(!isForwarded(message , me)){

    forward(message , me) ;

    proxy.call('doSend' , message) ;

    return true ;
 }

 return false ;