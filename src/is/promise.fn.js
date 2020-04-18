
/**
 * 
 * 判断数据是否为 Promise 对象
 * 
 * @import isProcessive from .promise.processive
 * 
 * @import isNative from .promise.native
 * 
 * @param {mixed} data 测试数据
 * 
 * @return {boolean} 如果是 Promise 则返回 true , 否则返回 false
 * 
 */

 return isNative(data) || isProcessive(data);