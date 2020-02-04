
/**
 * 
 * 发送消息
 * 
 * @import create from data.message.create
 * 
 * @param {mixed} address 接收消息地址
 * 
 * @param {mixed} params 发送的参数
 * 
 * @param {object} [config = {}] 发送配置
 * 
 */

 let {
     proxy,
     sendMessages
 } = this,
 {
     message,
     promise
 } = create(address , params , config),
 {
     id
 } = message;

 sendMessages[id] = message ;

 proxy.call('onSend' , message) ;

 return promise ;