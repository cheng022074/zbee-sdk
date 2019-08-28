
/**
 * 
 * 获取 socket.io 内置的 socket 原生对象
 * 
 * @param {mixed} socket socket.io 对象
 * 
 * @return {mixed} 原生 socket 对象 
 * 
 */

 return socket.io.engine.transport.ws ;