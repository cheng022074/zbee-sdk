
/**
 * 
 * 解析表达式中的字符串
 * 
 * @import is.string
 * 
 * @import is.number
 * 
 * @import parse from .operator
 * 
 * @import from from array.from
 * 
 * @param {string} expression 表达式
 * 
 * @return {mixed} 解析后语法树
 * 
 */


let operatorRe = /\+|\-|\*|=/g,
    match = operatorRe.exec(expression);

if(match){

    let {
        index
    } = match,
    [
        name
    ] = match,
    endIndex = index + name.length;

    switch(name){

        case '=':

            name = '===' ;
    }

    return [
        expression.substring(0 , index),
        {
            syntax:'operator',
            name
        },
        ...from(parse(expression.substring(endIndex , expression.length)))
    ] ;
}

return expression ;