
/**
 * 
 * 数据拷贝
 * 
 * @import isObject from is.object.simple
 * 
 * @import assign from object.assign
 * 
 * @import array.clone
 * 
 * @import date.clone
 * 
 * @import is.array
 * 
 * @import is.date
 * 
 * @import clone from .clone
 * 
 * @param {mixed} data 数据
 * 
 * @return {mixed} 拷贝后的数据 
 * 
 */

 if(isObject(data)){

    return assign({} , data) ;

 }else if(isArray(data)){

    return arrayClone(data) ;

 }else if(isDate(data)){

    return dateClone(data) ;
 }

 return data ;