
/**
 * 
 * 向 Socket 的服务端发布事件
 * 
 * 
 * @param {string} eventName 事件名称
 * 
 * @param {array} [...args] 事件参数
 * 
 * 
 */

this.$socket.emit('observer:dispatch' , {
    name:eventName,
    args
}) ;