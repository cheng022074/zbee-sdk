
/**
 * 
 * 解析表达式中的字符串
 * 
 * @import is.string
 * 
 * @import is.number
 * 
 * @import parse from .number
 * 
 * @import from from array.from
 * 
 * @param {string} expression 表达式
 * 
 */


let numberRe = /\d+(?:\.\d+)?/g,
    match = numberRe.exec(expression);

if(match){

    let {
        index
    } = match,
    [
        value
    ] = match,
    endIndex = index + value.length;

    return [
        expression.substring(0 , index),
        {
            syntax:'literal',
            datatype:'number',
            value:Number(value)
        },
        ...from(parse(expression.substring(endIndex , expression.length)))
    ] ;
}

return expression ;
