
/**
 * 
 * 判断是否是回复消息
 * 
 * @import is from ..message
 * 
 * @param {object} message 消息 
 * 
 * @return {boolean}  如果是回复消息，则返回 true , 否则返回 false
 * 
 */

return is(message) && message.hasOwnProperty('received') ;