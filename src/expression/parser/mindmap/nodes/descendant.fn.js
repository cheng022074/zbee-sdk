
/**
 * 
 * 解析路径中的所有子孙节点标识符
 * 
 * @import parse from ....component
 * 
 * @param {array} nodes 表达式中间数据
 * 
 */

 return parse(nodes , /\/{2}/ , () => ({
    syntax:'nodes',
    name:'descendants'
})) ;
