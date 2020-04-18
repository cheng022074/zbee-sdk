
/**
 * 
 * 发送消息
 * 
 * @import get from data.message.get
 * 
 * @import send from .send.body scoped
 * 
 * @param {mixed} address 接收消息地址
 * 
 * @param {mixed} params 发送的参数
 * 
 * @param {object} [config = {}] 发送配置
 * 
 */

 let {
   returnMessage = false
 } = config,
 message = get(this , address , params , config),
 {
    promise,
    body,
    created
 } = message ;

 if(created){

   send(body) ;
 
 }

 if(returnMessage === true){

    return message ;
 }

 return promise ;