
/**
 * 
 * 判断数据是否为 Promise 对象
 * 
 * @import MultiPromise from promise.multi value
 * 
 * @param {mixed} data 测试数据
 * 
 * @return {boolean} 如果是 Promise 则返回 true , 否则返回 false
 * 
 */

 return data instanceof Promise || data instanceof MultiPromise;