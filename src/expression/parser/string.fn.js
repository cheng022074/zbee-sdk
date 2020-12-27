
/**
 * 
 * 解析表达式中的字符串
 * 
 * @import parse from .container
 * 
 * @param {array} nodes 表达式中间数据
 * 
 */

 let tag ;

 return parse(nodes , /"|\\"|'|\\'/g , ([
    value
 ] , start  ,  end) => {

    tag = undefined ;

    return {
        syntax:'literal',
        datatype:'string',
        value
    } ;

 } , char => {

    if(!tag){

        tag = char ;

        return true ;
    }

    return false ;

 } , (char , chars) => char === tag , [
    '\\"',
    "\\'"
 ]) ;