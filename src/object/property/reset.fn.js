/**
 * 
 * 重置属性值
 * 
 * @import getPrefix from object.property.prefix
 * 
 * @param {object} target 目标对象
 * 
 * @param {string} name 属性名称
 * 
 */

delete target[`${getPrefix()}${name}`] ;