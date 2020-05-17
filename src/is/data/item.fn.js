
/**
 * 
 * 判断是否为数据项
 * 
 * @import is.object
 * 
 * @import has from object.property.inner.has
 * 
 * @param {mixed} data 数据
 * 
 * @return {boolean} 判断结果 
 * 
 */

 return isObject(data) && has(data , 'observable') ;