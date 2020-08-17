
/**
 * 
 * 解析表达式中的圆括号
 * 
 * @import parse from ..container
 * 
 * @param {array} nodes 表达式中间数据
 * 
 */

return parse(nodes , /\(|\)/g , children => {

    return {
        syntax:'brackets',
        type:'round',
        children
     } ;

} , (char , chars) => char ==='(' && chars['('] === 1 , (char , chars) => char ==')' && chars['('] === chars[')']) ;