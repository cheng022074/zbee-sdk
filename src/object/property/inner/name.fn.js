
/**
 * 
 * 返回属性内部名称
 * 
 * @import id from id.zbee value
 * 
 * @param {string} name 属性名称
 * 
 * @param {string} [type] 属性类型名称
 * 
 * @return {string} 属性内部名称
 * 
 */

 return `__${id}_${type ? type : 'OBJECT_INNER_PROPERTY'}_${name}__` ;