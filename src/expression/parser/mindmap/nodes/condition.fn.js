
/**
 * 
 * 解析表达式中的节点条件表达式
 * 
 * @import parse from ....block
 * 
 * @param {string} expression 表达式
 * 
 */

 console.log(expression) ;

return parse(expression , /\[|\]/g , value => {

    return {
        syntax:'nodes',
        type:'condition',
        children:value.substring(1 , value.length - 1)
     } ;

} , char => char ==='[' , (char , chars) => char ==']' && chars['['] === chars[']']) ;