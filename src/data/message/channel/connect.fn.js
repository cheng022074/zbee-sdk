
/**
 * 
 * 连接
 * 
 * @import send from .send scoped
 * 
 * @param {mixed} address 接收消息地址
 * 
 * @param {mixed} params 发送的数据
 * 
 * @param {object} [config = {}] 发送配置
 * 
 */

return send(address , params , {
    ...config,
    processive:true
}) ;