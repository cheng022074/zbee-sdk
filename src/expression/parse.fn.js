
/**
 * 
 * 表达式解析
 * 
 * @import parse from .parse.inner
 * 
 * @param {string} expression 语法树
 * 
 * @param {array} parsers 解析器集合
 * 
 * @return {mixed} 解析出来的 AST 语法树 
 * 
 */

 return {
    syntax:'expression',
    children:parse(expression , parsers)
 } ;