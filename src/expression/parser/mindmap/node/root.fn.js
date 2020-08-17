
/**
 * 
 * 解析路径中的根节点描述符
 * 
 * @import parse from ....component
 * 
 * @param {array} nodes 表达式中间数据
 * 
 */

return parse(nodes , /^\s*\// , name => ({
    syntax:'node',
    name:'root'
})) ;