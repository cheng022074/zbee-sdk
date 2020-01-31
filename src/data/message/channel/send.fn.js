
/**
 * 
 * 发送消息
 * 
 * @param {string} address 接收消息地址
 * 
 * @param {mixed} data 发送的数据
 * 
 */

 let {
     proxy
 } = this ;

 proxy.call('onSend' , {
     to:address,
     data
 }) ;