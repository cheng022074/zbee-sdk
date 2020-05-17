
/**
 * 
 * 去除内部属性
 * 
 * @import innerName from .name
 * 
 * @param {object} target  定义内部属性的宿主
 * 
 * @param {string} name 内部属性名称
 * 
 */

 delete target[innerName(name)] ;