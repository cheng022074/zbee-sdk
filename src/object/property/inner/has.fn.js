
/**
 * 
 * 判断是否拥有内置属性
 * 
 *  @import innerName from .name
 * 
 * @param {object} target  定义内部属性的宿主
 * 
 * @param {string} name 内部属性名称
 * 
 * @return {boolean} 如果拥有指定内部属性则返回 true , 否则返回 false
 * 
 */

 return target.hasOwnProperty(innerName(name)) ;