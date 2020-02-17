
/**
 * 
 * 连接
 * 
 * @import send from .send scoped
 * 
 * @import connect from data.message.processive.connect scoped
 * 
 * @param {mixed} address 接收消息地址
 * 
 * @param {mixed} params 发送的数据
 * 
 * @param {object} [config = {}] 发送配置
 * 
 */

let {
    body,
    promise
} = send(address , params , {
    ...config,
    processive:true,
    returnMessage:true
}) ;

connect(body.id) ;

return promise ;