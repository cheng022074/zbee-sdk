
/**
 * 
 * 空字符串解析
 * 
 * @import is.string
 * 
 * @param {array} nodes 表达式中间数据
 * 
 */

 let result = [] ;

 for(let node of nodes){

    if(isString(node) && node.trim() === ''){

        continue ;
    }

    result.push(node) ;
 }

 return result ;

