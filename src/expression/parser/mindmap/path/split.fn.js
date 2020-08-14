
/**
 * 
 * 解析路径中的路径分隔符
 * 
 * @import parse from ....regex
 * 
 * @param {string} expression 表达式
 * 
 */

return parse(expression , /\// , () => ({
    syntax:'path',
    name:'split'
})) ;
