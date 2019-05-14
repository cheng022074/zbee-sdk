
/**
 * 
 * 实例基于指定类对象
 * 
 * @import is.string
 * 
 * @import is.class
 * 
 * @import is.function
 * 
 * @param {mixed} baseClass 类
 * 
 * @param {mixed} [...args] 类参数
 * 
 */

if(isString(baseClass)){

    return include(baseClass)(...args) ;

}else if(isClass(baseClass)){

    return new baseClass(...args) ;

}else if(isFunction(baseClass)){

    return baseClass(...args) ;

}

return subscriber ;