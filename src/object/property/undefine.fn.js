/**
 * 
 * 取消定义一个属性
 * 
 * @import innerName from .inner.name
 * 
 * @param {object} target 目标对象
 * 
 * @param {string} name 属性名称
 * 
 */

 delete target[name] ;

 delete target[innerName(name)] ;

