
/**
 * 
 * 解析路径中的所有属性
 * 
 * @import parse from ....component
 * 
 * @param {array} nodes 表达式中间数据
 * 
 */

return parse(nodes , /@\*/ , name => ({
    syntax:'attributes'
})) ;
