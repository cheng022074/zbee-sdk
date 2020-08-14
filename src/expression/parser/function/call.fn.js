
/**
 * 
 * 解析表达式中的函数
 * 
 * @import parse from ..block
 * 
 * @import .param.split
 * 
 * @import doParse from ....parse
 * 
 * @param {string} expression 表达式
 * 
 */

let tag ;

return parse(expression , /[A-Za-z]\w*\s*\(|\)/g , content => {

    let [
        ,
        name,
        children
    ] = content.match(/^([A-Za-z]\w*)\s*\((.+)\)$/) ;

    return {
        syntax:'function',
        operation:'call',
        name,
        children:doParse(children , [
            'expression.parser.function.param.split'
        ])
    } ;

} , char => {

   if(!tag){

       tag = char ;

       return true ;
   }

   return false ;

} , (char , chars) => char === ')' && chars[tag] === chars[char]) ;