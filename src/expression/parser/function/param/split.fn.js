
/**
 * 
 * 解析路径中的路径分隔符
 * 
 * @import parse from ....component
 * 
 * @param {array} nodes 表达式中间数据
 * 
 */

return parse(nodes , /,/ , () => ({
    syntax:'split',
    name:'param'
})) ;
