/**
 * 
 * 获得本地存储器中指定的键对应的值
 * 
 * @import is.null
 * 
 * @param {Storage} storage 存储器对象
 * 
 * @param {string} key 键名称
 * 
 * @return {string|undefined} 对应键的字符串,如果键值不存在，则返回 undefined
 * 
 */

let value = storage.getItem(key) ;

if(!isNull(value)){

    return value ;
}