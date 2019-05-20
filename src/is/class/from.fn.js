
/**
 * 
 * 判定数据是否为指定类
 * 
 * @import is.class
 * 
 * @import is.string
 * 
 * @param {mixed} data 测试数据
 * 
 * @param {mixed} baseClass 基准类
 * 
 * @return {boolean} 如果数据为基准类时则返回 true ,  否则返回 false
 * 
 */

 if(isString(baseClass)){

    baseClass = include(baseClass)() ;
 }

 return isClass(data) && isClass(baseClass) && (data === baseClass || data.prototype instanceof baseClass) ;