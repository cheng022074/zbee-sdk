
/**
 * 
 * 判断是否内存代理
 * 
 * @import Proxy from data.proxy value
 * 
 * @param {mixed} data 测试数据
 * 
 * @return {boolean} 如果为内存代理则返回 true , 否则返回 false
 * 
 */


 return data instanceof Proxy && data.proxyType === 'memory' ;