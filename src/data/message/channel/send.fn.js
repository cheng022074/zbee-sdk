
/**
 * 
 * 发送消息
 * 
 * @import get from data.message.get
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
     addresses
 } = me,
 message = get(me , address , params , config),
 {
    promise,
    body
 } = message,
 {
     to
 } = body;

 if(addresses.hasOwnProperty(to)){

    me.receive(body) ;
 
 }else{

    proxy.call('doSend' , body) ;
 }

 return promise ;