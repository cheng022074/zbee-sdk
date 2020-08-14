
/**
 * 
 * 解析表达式中的字符串
 * 
 * @import parse from .regex
 * 
 * @param {string} expression 表达式
 * 
 */

 return parse(expression , /\d+(?:\.\d+)?/ , value => ({
    syntax:'literal',
    datatype:'number',
    value:Number(value)
})) ;
