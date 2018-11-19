
/**
 * 
 * 判定指定数据是否为指定类名称对象的实例
 * 
 * @import is.function
 * 
 * @param {mixed} data 参数说明
 * 
 * @param {string} className 类名称
 * 
 * @return {boolean} 如果指定数据是类的实例则返回 true ，否则返回 false 
 * 
 */

let target = include(className)() ;

return isFunction(target) && data instanceof target ;