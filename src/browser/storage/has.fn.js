/**
 * 
 * 判断本地存储器是否包含指定的键
 * 
 * @import is.null
 * 
 * @param {Storage} storage 存储器对象
 * 
 * @param {string} key 键名称
 * 
 * @return {boolean} 如果本地存储器包含指定的键则返回 true , 否则返回 false
 * 
 */

return !isNull(storage.getItem(key)) ;