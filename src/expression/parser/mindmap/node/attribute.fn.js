
/**
 * 
 * 解析路径中的节点插件描述符
 * 
 * @import parse from ....regex
 * 
 * @param {string} expression 表达式
 * 
 */

return parse(expression , /@([A-Za-z]\w*)/ , name => ({
    syntax:'attribute',
    name
}) , 1) ;
