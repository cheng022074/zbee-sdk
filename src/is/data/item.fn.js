
/**
 * 
 * 判断是否为数据项
 * 
 * @import is.object
 * 
 * @import get from object.property.inner.get
 * 
 * @param {mixed} data 数据
 * 
 * @return {boolean} 判断结果 
 * 
 */

 return isObject(data) && get(data , 'DATA_RECORD') === true ;