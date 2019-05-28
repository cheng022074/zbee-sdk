
/**
 * 
 * 是否对象方法
 * 
 * @import is.function
 * 
 * @param {mixed} target 对象
 * 
 * @param {string} name 字段名称
 * 
 * @return {boolean} 如果指定字段是函数的话则返回 true , 否则返回 false 
 * 
 */

let {
    value
} = Object.getOwnPropertyDescriptor(target , name) ;

return isFunction(value) ;