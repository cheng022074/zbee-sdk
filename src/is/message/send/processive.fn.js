
/**
 * 
 * 判断是否为发送持续消息
 * 
 * @import is from ..send
 * 
 * @param {object} message 参数说明
 * 
 * @return {boolean} 如果为发送持续消息则返回 true , 否则返回 false 
 * 
 */

 return is(message) && message.processive === true ;