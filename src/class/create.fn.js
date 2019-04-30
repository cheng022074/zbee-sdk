
/**
 * 
 * 实例基于指定类对象
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @param {string} namespace 命名空间
 * 
 * @param {mixed} options 实例参数
 * 
 * @return {mixed} 类实例 
 * 
 */

 
if(isString(options)){

    return include(`${namespace}.${options}`)() ;
 
}else if(isObject(options)){

    let {
        name,
        ...currentOptions
    } = options ;

    return include(`${namespace}.${name}`)(currentOptions) ;
 }

 return proxy ;