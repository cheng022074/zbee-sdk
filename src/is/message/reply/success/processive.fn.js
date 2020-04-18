
/**
 * 
 * 判断回复信息是否为持续信息
 * 
 * @import is from ..success
 * 
 * @param {object} message 消息
 * 
 * @return {boolean} 如果回复信息是持续信息则返回 true , 否则返回 false 
 * 
 */

 return is(message) && message.processive === true ;