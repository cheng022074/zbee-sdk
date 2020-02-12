
/**
 * 
 * 触发事件
 * 
 * @param {string} event 事件名称
 * 
 * @param {data.Message} message 消息包
 * 
 * @param {mixed} [...args] 事件参数
 * 
 */

 let {
     id
 } = message ;

 this.fireEvent(`${event}-${id}` , ...args , message) ;
