
/**
 * 
 * 解析表达式中的字符串
 * 
 * @import parse from .component
 * 
 * @param {array} nodes 表达式中间数据
 * 
 */

 return parse(nodes , /\-?\d+(?:\.\d+)?/ , value => ({
    syntax:'literal',
    datatype:'number',
    value:Number(value)
})) ;


