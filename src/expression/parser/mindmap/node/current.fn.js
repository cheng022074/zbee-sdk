
/**
 * 
 * 解析路径中的当前节点描述符
 * 
 * @import parse from ....regex
 * 
 * @param {string} expression 表达式
 * 
 */

return parse(expression , /\./ , name => ({
    syntax:'node',
    type:'axis',
    name:'current'
})) ;