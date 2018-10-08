/**
 * 
 * 设置本地存储器中键值
 * 
 * @import is.string
 * 
 * @param {Storage} storage 存储器对象
 * 
 * @param {string} key 键名称
 * 
 * @param {mixed} value 键值 
 * 
 * @return {boolean} 如果设置的键值不是字符串则返回 false , 否则返回 true
 */

if(isString(value)){

    storage.setItem(key , value) ;

    return true ;
}

return false ; 