
/**
 * 
 * 组件级解析
 * 
 * @import is.string
 * 
 * @import parse from .component
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

let result = [],
    {
        length
    } = nodes;

for(let i = 0 ; i < length ; i ++){

    let node = nodes[i] ;

    if(isString(node)){

        let match = node.match(regex);

        if(match){

            let {
                index
            } = match,
            value = match[position];

            result.push(node.substring(0 , index) , fn(value) , node.substring(index + match[0].length , node.length)) ;

            result.push(...nodes.slice(i + 1)) ;

            return parse(result , regex , fn , position) ;

        }
    }

    result.push(node) ;    
    
}

return result ;
