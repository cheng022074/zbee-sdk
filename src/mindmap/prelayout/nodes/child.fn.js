
/**
 * 
 * 返回子节点集合
 * 
 * @param {data.Record} node 节点
 * 
 * @return {array} 节点信息集合
 * 
 */

 let {
    expanded,
    children
 } = node ;

let result = [] ;

if(expanded){

    for(let childNode of children){

        result.push(childNode) ;
    }

    return result ;
}

return result ;