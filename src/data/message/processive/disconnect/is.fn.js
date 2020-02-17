
/**
 * 
 * 判断持续消息是否可真实断开
 * 
 * @param {string} id 消息编号
 * 
 * @return {boolean} 如果持续消息可以断开则返回 true , 否则返回 false
 * 
 */

let {
    messages
 } = this ;

 return messages.hasOwnProperty(id) && messages[id].connectCount === 0 ;