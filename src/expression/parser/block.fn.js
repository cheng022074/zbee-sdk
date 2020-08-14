
/**
 * 
 * 解析表达式中的字符串
 * 
 * @import is.number
 * 
 * @param {string} expression 表达式
 * 
 * @param {RegExp} blockRe 块状正则表达式
 * 
 * @param {function} fn 生成语法树的回调
 * 
 * @param {function} startFn 块状态起始字符串
 * 
 * @param {function} endFn 块状态终止字段串
 * 
 * @param {array} [ignores = []] 忽略的字符串
 * 
 */


let match,
    startChar,
    startIndex,
    endIndex,
    chars = {};

while(match = blockRe.exec(expression)){

    [
        char
    ] = match ;

    if(ignores.includes(char)){

        continue ;
    }

    if(!chars.hasOwnProperty(char)){

        chars[char] = 1 ;
    
    }else{

        chars[char] ++ ;
    }

    if(startFn(char , chars)){

        startIndex = match.index ;
    
    }else if(endFn(char , chars)){

        endIndex = match.index ;

        break ;
        
    }
}

if(isNumber(startIndex) && isNumber(endIndex)){

    return [
        expression.substring(0 , startIndex),
        fn(expression.substring(startIndex , endIndex + 1)),
        expression.substring(endIndex + 1 , expression.length)
    ] ;

}

return expression ;
