/**
 * 
 * 信息包是否为正文
 * 
 * @import is from connection.message.is
 * 
 * @param {object} message 信息包
 * 
 * @return {boolean} 信息为正文则返回 true , 否则返回 false
 * 
 */

return is(message) && !message.hasOwnProperty('reply') ;