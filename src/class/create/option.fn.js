/**
 * 
 * 基于配置的实例
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.class
 * 
 * @import create from class.create
 * 
 * @param {string} namespace 命名空间
 * 
 * @param {mixed}  option 配置
 * 
 * @return {mixed} 类实例
 * 
 */

 if(isString(option)){

    return create(`${namespace}.${option}`) ;

 }else if(isObject(option)){

    let {
        type,
        ...currentOptions
    } = option ;

    return create(`${namespace}.${type}` , currentOptions) ;
 
}