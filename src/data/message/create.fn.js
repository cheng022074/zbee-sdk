
/**
 * 
 * 创建一个消息
 * 
 * @param {mixed} address 接收消息地址
 * 
 * @param {mixed} params 发送的数据
 * 
 * @param {object} [config = {}] 发送配置
 * 
 * @param {boolean} [config.reconnection = true] 在发送失败后是否重发 
 * 
 * @param {string} [config.fromAddress] 发送消息地址
 * 
 * @param {boolean} [config.processive = true] 是否持续性连接
 * 
 */

 let {
    rootAddress
 } = this ;

 return {
     from:fromAddress || rootAddress,
     to:address,
     params,
     reconnection,
     processive
 } ;