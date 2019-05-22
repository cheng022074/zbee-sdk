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
 * @import is.defined
 * 
 * @param {string} namespace 命名空间
 * 
 * @param {mixed}  [option] 配置
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
    } = option,
    name;

    if(type){

        name = `${namespace}.${type}` ;
    
    }else{

        name = namespace ;
    }

    return create(name , currentOptions) ;
 
}else if(!isDefined(options)){

    return create(namespace) ;
}