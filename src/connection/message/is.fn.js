/**
 * 
 * 判断指定数据是否为信息包
 * 
 * @import isObject from is.object.simple
 * 
 * @param {mixed} data 可能信息包的数据
 * 
 * @return {boolean} 如果指定的数据是信息包则返回 true , 否则返回 false
 * 
 */

if(isObject(data)){

    return data.hasOwnProperty('id') && data.hasOwnProperty('action') ;
}

return false ;