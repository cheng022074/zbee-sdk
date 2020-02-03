
/**
 * 
 * 回复消息发送成功
 * 
 * @import reply from ..reply
 * 
 * @param {data.Message} message 消息
 * 
 * @param {mixed} result 回复结果
 * 
 */

 reply({
     ...message,
     received:true,
     result
 }) ;