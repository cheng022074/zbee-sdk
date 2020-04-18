
/**
 * 
 * 判断回复信息为取消持续信息
 * 
 * @import is from ..processive
 * 
 * @param {object} message 消息
 * 
 * @return {boolean} 如果回复信息是取消持续信息则返回 true , 否则返回 false 
 * 
 */

return is(message) && message.cancel === true ;