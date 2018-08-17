
/**
 * 
 * 向所有绑定的当前 Socket 的客户端发布事件
 * 
 * 
 * @param {string} eventName 事件名称
 * 
 * @param {array} [args = []] 事件参数
 * 
 * 
 */

this.$server.emit(`business:${eventName}` , ...args) ;
