
/**
 * 
 * 解析表达式中的字符串
 * 
 * @import parse from .block
 * 
 * @param {string} expression 表达式
 * 
 */

 let tag ;

 return parse(expression , /"|\\"|'|\\'/g , value => ({
    syntax:'literal',
    datatype:'string',
    value:value.substring(1 , value.length - 1)
}) , char => {

    if(!tag){

        tag = char ;

        return true ;
    }

    return false ;

 } , (char , chars) => char === tag , [
    '\\"',
    "\\'"
 ]) ;