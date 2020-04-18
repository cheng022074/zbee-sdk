
/**
 * 
 * 创建数据代理
 * 
 * @import is.array
 * 
 * @import isObject from is.object.simple
 * 
 * @import createObject from .object scoped
 * 
 * @import createArray from .array scoped
 * 
 * @import clone from data.clone
 * 
 * @param {mixed} data 需要代理的数据
 * 
 * @param {boolean} [isClone = false] 是否进行数据拷贝
 * 
 * @return {mixed} 代理后的数据
 * 
 */

 if(isClone){

    data = clone(data) ;
 }

 if(isArray(data)){

    return createArray(data) ;

 }else if(isObject(data)){

    return createObject(data) ;
 }

 return data ;

