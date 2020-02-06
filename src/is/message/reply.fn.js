
/**
 * 
 * 判断是否是回复消息
 * 
 * @param {object} message 消息 
 * 
 * @return {boolean}  如果是回复消息，则返回 true , 否则返回 false
 * 
 */

return !message.hasOwnProperty('received') ;