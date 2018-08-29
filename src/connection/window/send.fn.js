/**
 * 
 * 使用窗口发送一个信息包
 * 
 * @import send from connection.send
 * 
 * @import connection.send.window
 * 
 * @import doPackage from connection.message.package
 * 
 * @param {Window} window 作用的窗口
 * 
 * @param {string} action 信息动作名称
 * 
 * @param {mixed} [data] 信息需要传递的数据
 * 
 * @return {Promise} 发送后的返回数据
 * 
 */

return send(window , 'connection.send.window' , doPackage(action , data)) ;
