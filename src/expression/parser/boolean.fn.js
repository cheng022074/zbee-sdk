
/**
 * 
 * 解析表达式中的字符串
 * 
 * @import parse from .regex
 * 
 * @param {string} expression 表达式
 * 
 */

 return parse(expression , /true|false/ , value => ({
    syntax:'literal',
    datatype:'boolean',
    value:value === 'true'
 })) ;