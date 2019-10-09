
/**
 * 
 * 判定指定数据是否为数据记录
 * 
 * @import isObject from is.object.simple
 * 
 * @param {mixed} data 检验数据
 * 
 * @return {boolean} 如果为数据记录则返回 true , 否则返回 false 
 * 
 */

 if(isObject(data)){

    return data.hasOwnProperty('__ZBEE_DATA_ID__') ;
 }

 return false ;