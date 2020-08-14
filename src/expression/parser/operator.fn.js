
/**
 * 
 * 解析表达式中的字符串
 * 
 * @import parse from .regex
 * 
 * @param {string} expression 表达式
 * 
 * @return {mixed} 解析后语法树
 * 
 */

 return parse(expression , /\+|\-|\*|=/ , name => {

    switch(name){

        case '=':

            name = '===' ;
    }

    return {
        syntax:'operator',
        name
    } ;

 }) ;