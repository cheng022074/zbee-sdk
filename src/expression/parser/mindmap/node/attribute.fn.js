
/**
 * 
 * 解析路径中的属性
 * 
 * @import parse from ....component
 * 
 * @param {array} nodes 表达式中间数据
 * 
 */

return parse(nodes , /@([A-Za-z]\w*)/ , name => ({
    syntax:'attribute',
    name
}) , 1) ;
