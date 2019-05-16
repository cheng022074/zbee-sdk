
/**
 * 
 * 实例基于指定类对象
 * 
 * @import is.string
 * 
 * @import is.function
 * 
 * @import is.class
 * 
 * @param {mixed} baseClass 类
 * 
 * @param {mixed} [...args] 类参数
 * 
 */

if(isString(baseClass)){

    baseClass = include(baseClass) ;
}

if(isFunction(baseClass)){

    return baseClass(...args) ;

}else if(isClass(baseClass)){

    return new baseClass(...args) ;
}