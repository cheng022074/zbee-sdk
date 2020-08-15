
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

 return parse(nodes , /"|\\"|'|\\'/g , (children , start  ,  end) => {

    console.log(children , start , end) ;

    return {
        syntax:'literal',
        datatype:'string',
        value:children[0]
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