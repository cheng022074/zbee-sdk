
/**
 * 
 * 解析路径中的所有子节点标识符
 * 
 * @import parse from ....regex
 * 
 * @param {string} expression 表达式
 * 
 */

 return parse(expression , /\// , () => ({
    syntax:'nodes',
    name:'children'
})) ;
