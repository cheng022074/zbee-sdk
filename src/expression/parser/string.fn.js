
/**
 * 
 * 解析表达式中的字符串
 * 
 * @import is.number
 * 
 * @param {string} expression 表达式
 * 
 */


let quotationMarkRe = /"|\\"|'|\\'/g,
    match,
    startChar,
    startIndex,
    endIndex;

while(match = quotationMarkRe.exec(expression)){

    if(!isNumber(startIndex)){

        [
            startChar
        ] = match ;

        if(startChar === '\\"' || startChar === "\\'"){

            break ;
        }

        startIndex = match.index ;
    
    }else{

        [
            char
        ] = match ;

        if(startChar === char){

            endIndex = match.index ;

            break ;
        }
    }
}

if(isNumber(startIndex) && isNumber(endIndex)){

    return [
        expression.substring(0 , startIndex),
        {
            syntax:'literal',
            datatype:'string',
            value:expression.substring(startIndex + 1 , endIndex)
        },
        expression.substring(endIndex + 1 , expression.length)
    ] ;

}

return expression ;
