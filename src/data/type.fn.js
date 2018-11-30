
/**
 * 
 * 获得数据类型引用
 * 
 * @import data.type.auto
 * 
 * @param {string} [name = 'auto'] 数据类型名称
 * 
 * @return {data.Type} 数据类型引用
 * 
 */

return include(`data.type.${name}`)() ;