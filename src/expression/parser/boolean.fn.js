
/**
 * 
 * 解析表达式中的字符串
 * 
 * @import parse from .boolean
 * 
 * @import from from array.from
 * 
 * @param {string} expression 表达式
 * 
 */


let booleanRe = /true|false/g,
    match = booleanRe.exec(expression);

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
            datatype:'boolean',
            value:value === 'true'
        },
        ...from(parse(expression.substring(endIndex , expression.length)))
    ] ;
}

return expression ;
