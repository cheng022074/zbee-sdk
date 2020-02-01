
/**
 * 
 * 发送消息
 * 
 * @param {string} address 接收消息地址
 * 
 * @param {mixed} data 发送的数据
 * 
 * @param {object} [config = {}] 发送配置
 * 
 * @param {string} [config.fromAddress] 发送消息地址
 * 
 * @param {boolean} [config.reSend = true] 是否重发消息
 * 
 */

 let {
     proxy
 } = this ;

 proxy.call('onSend' , {
     to:address,
     data,
     reSend,
     from:fromAddress
 }) ;