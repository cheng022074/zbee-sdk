
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
     messages
 } = me,
 message = create(me , address , params , config),
 {
    promise,
    body
 } = message,
 {
     id,
     to
 } = body;

 messages[id] = message ;

 if(addresses.hasOwnProperty(to)){

    me.receive(body) ;
 
 }else{

    proxy.call('doSend' , body) ;
 }

 return promise ;