/**
 * 
 * 发送信息并返回
 * 
 * @import isReply from connection.message.is.reply
 * 
 * @import isReplyTo from connection.message.is.reply.to
 * 
 * @import result from connection.message.reply.result
 * 
 * @param {mixed} sender 发送者对象
 * 
 * @param {string} implementName 接收操作函数名称
 * 
 * @param {object} message 消息体对象
 * 
 * @return {Promise} 返回的数据
 * 
 */

return new Promise(callback =>{

    include(implementName)(sender , message , replyMessage =>{

        if(isReplyTo(replyMessage , message)){
    
            callback(result(replyMessage)) ;
            
            return true ;
        }

    }) ;
}) ;

