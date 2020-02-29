
/**
 * 
 * 是否为消息体
 * 
 * @import isObject from is.object.simple
 * 
 * @param {mixed} data 校验数据 
 * 
 * @return {boolean} 如果是消息体则返回 true , 否则返回 false 
 * 
 */

 if(isObject(data)){

    return data.hasOwnProperty('id') && data.hasOwnProperty('from') && data.hasOwnProperty('to') ;
 }
 