
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

    console.log(baseClass.toString()) ;

    baseClass = baseClass(...args) ;

    if(!isClass(baseClass)){

        return baseClass ;
    }
}

if(isClass(baseClass)){

    return new baseClass(...args) ;
}