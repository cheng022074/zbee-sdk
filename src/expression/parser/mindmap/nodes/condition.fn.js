
/**
 * 
 * 解析表达式中的节点条件表达式
 * 
 * @import parse from ....container
 * 
 * @param {array} nodes 表达式中间数据
 * 
 */

return parse(nodes , /\[|\]/g , children => {

    return {
        syntax:'nodes',
        type:'condition',
        children
     } ;

} , (char , chars) => char ==='[' && chars['['] === 1 , (char , chars) => char ==']' && chars['['] === chars[']']) ;