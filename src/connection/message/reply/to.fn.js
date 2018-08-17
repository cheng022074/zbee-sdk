/**
 * 
 * 判断指定的回复信息包是否回复的是指定信息包
 * 
 * @import isMain from connection.message.is.main
 * 
 * @import isReply from connection.message.is.reply
 * 
 * @param {object} replyMessage 回复消息包
 * 
 * @param {object} message 信息包
 * 
 * @return {boolean} 回复信息包与信息匹配则返回 true , 否则返回 false
 * 
 */

return isReply(replyMessage) && isMain(message) && replyMessage.id === message.id ;