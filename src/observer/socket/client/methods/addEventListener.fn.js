
/**
 * 
 * 添加事件侦听
 * 
 * 
 * @param {string} eventName 事件名称
 * 
 * @param {function} fn 函数
 * 
 * @param {mixed} [scope] 函数的作用域
 * 
 * 
 */

this.$socket.on(`business:${eventName}` , fn.bind(scope)) ;
