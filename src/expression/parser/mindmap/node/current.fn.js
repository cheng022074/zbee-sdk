
/**
 * 
 * 解析路径中的当前节点描述符
 * 
 * @import parse from ....component
 * 
 * @param {array} nodes 表达式中间数据
 * 
 */

return parse(nodes , /\./ , name => ({
    syntax:'node',
    name:'current'
})) ;