
/**
 * 
 * 持续消息连接
 * 
 * @param {string} id 消息编号
 * 
 */

 let {
    messages
 } = this ;

 if(messages.hasOwnProperty(id)){

    message.connectCount ++ ;
 }