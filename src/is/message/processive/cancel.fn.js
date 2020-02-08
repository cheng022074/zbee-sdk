
/**
 * 
 * 判断是否是取消持续发送消息
 * 
 * @import is from ..processive
 * 
 * @param {object} message 消息 
 * 
 * @return {boolean}  如果是发送消息，则返回 true , 否则返回 false
 * 
 */

return is(message) && message.cancel === true ;