/**
 * 
 * 获得一个函数引用
 * 
 * @import is.string
 * 
 * @param {string | function} fn 函数描述
 * 
 * @return {function} 函数引用本身 
 * 
 */

if(isString(fn)){

    return include(fn) ;
}

return fn ;