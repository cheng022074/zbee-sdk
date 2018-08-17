
/**
 * 
 * 基于值的表达式转换
 * 
 * @import match from regexp.match
 * 
 * @param {string} value 一个表达式的值
 * 
 * @return {string} 转换后的表达式
 * 
 */


let result = match(expression , /(?:\$\{)|\{|\}/g , [{
    start:'${',
    end:'}'
},{
    start:'{',
    end:'}'
}]) ;

if(result){

    result = result[0] ;

    if(result === expression){

        return result.replace(/(?:^\$\{)|(?:\}$)/g , '') ;
    }

    return `\`${expression}\`` ;
}

return `'${expression}'` ;