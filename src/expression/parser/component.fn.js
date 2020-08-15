
/**
 * 
 * 组件级解析
 * 
 * @import is.string
 * 
 * @param {array} nodes 表达式中间数据
 * 
 * @param {RegExp} regex 正则表达式
 * 
 * @param {function} fn 生成语法树的回调
 * 
 * @param {number} [position = 0] 取出正则匹配中的值
 * 
 */

let result = [] ;

for(let node of nodes){

    if(isString(node)){

        let match = node.match(regex);

        if(match){

            let {
                index
            } = match,
            value = match[position];

            result.push(node.substring(0 , index) , fn(value) , node.substring(index + match[0].length , node.length)) ;

            continue ;

        }
    }

    result.push(node) ;    
    
}

return result ;
