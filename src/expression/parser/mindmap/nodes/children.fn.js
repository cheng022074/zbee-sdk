
/**
 * 
 * 解析路径中的所有子节点标识符
 * 
 * @import parse from ....component
 * 
 * @param {array} nodes 表达式中间数据
 * 
 */

 return parse(nodes , /\/\*?/ , () => ({
    syntax:'nodes',
    name:'children'
})) ;
