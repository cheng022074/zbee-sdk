
/**
 * 
 * 注册新地址到一个对象上
 * 
 * @import getAddress from message.address
 * 
 * @import isRegistered from message.address.registered
 * 
 * @import register from message.address.register
 * 
 * @param {string} address 地址名称
 * 
 * @param {mixed} target 目标对象
 * 
 * @param {object} addressConfig 地址配置
 * 
 */

 if(!isRegistered(address)){

   return register(getAddress(address , target , addressConfig)) ;
 }

 throw new Error(`${address} 已经被占用`) ;

