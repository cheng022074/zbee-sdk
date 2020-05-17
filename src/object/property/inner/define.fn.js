
/**
 * 
 * 定义内部属性
 * 
 * @import innerName from .name
 * 
 * @import isObject from is.object.simple
 * 
 * @param {object} target  定义内部属性的宿主
 * 
 * @param {string|object} name 内部属性名称
 * 
 * @param {mixed} value 内部属性值
 * 
 */

 if(isObject(name)){

    let properties = name,
        names = Object.keys(properties),
        innerProperties = {};

    for(let name of names){

        innerProperties[innerName(name)] = {
            value:properties[name],
            writable:true
        }
    }

    Object.defineProperties(target , innerProperties) ;
 
 }else{

    Object.defineProperty(target , innerName(name) , {
        value,
        writable:true
    }) ;
 }