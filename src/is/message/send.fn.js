
/**
 * 
 * 判断是否是发送消息
 * 
 * @param {object} message 消息 
 * 
 * @return {boolean}  如果是发送消息，则返回 true , 否则返回 false
 * 
 */

 return !message.hasOwnProperty('received') ;