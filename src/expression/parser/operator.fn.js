
/**
 * 
 * 解析表达式中的字符串
 * 
 * @import parse from .component
 * 
 * @param {array} nodes 表达式中间数据
 * 
 * @return {mixed} 解析后语法树
 * 
 */

 return parse(nodes , /\+|\-|\*|=|div/ , name => {

    switch(name){

        case '=':

            name = '===' ;

            break ;

        case 'div':

            name = '/' ;
    }

    return {
        syntax:'operator',
        name
    } ;

 }) ;