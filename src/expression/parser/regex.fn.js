
/**
 * 
 * 基于正则表达式的解析
 * 
 * @param {string} expression 表达式
 * 
 * @param {RegExp} regex 正则表达式
 * 
 * @param {function} fn 生成语法树的回调
 * 
 */

let match = expression.match(regex);

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
        fn(value),
        expression.substring(endIndex , expression.length)
    ] ;
}

return expression ;
