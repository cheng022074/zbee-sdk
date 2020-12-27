
/**
 * 
 * 解析表达式中的布尔型
 * 
 * @import parse from .component
 * 
 * @param {string} expression 表达式
 * 
 */

 return parse(expression , /true|false/ , value => ({
    syntax:'literal',
    datatype:'boolean',
    value:value === 'true'
 })) ;