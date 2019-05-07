
/**
 * 
 * 将对象扁平化处理
 * 
 * @import getKeys from ..keys
 * 
 * @import get from ..get
 * 
 * @param {object} data 对象
 * 
 * @return {object} 扁平化后的对象 
 * 
 */

 let keys = getKeys(data),
     values = {};

 for(let key of keys){

    values[key] = get(data , key) ;
 }

 return values ;

 