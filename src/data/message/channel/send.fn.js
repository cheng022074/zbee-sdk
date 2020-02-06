
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

 let me = this,
 {
     proxy,
     addresses,
     sendMessages
 } = me,
 {
     message,
     promise
 } = create(address , params , config),
 {
     id,
     to
 } = message;

 sendMessages[id] = message ;

 if(addresses.hasOwnProperty(to)){

    me.receive(message) ;
 
 }else{

    proxy.call('doSend' , message) ;
 }

 return promise ;