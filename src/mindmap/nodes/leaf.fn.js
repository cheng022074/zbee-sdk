
/**
 * 
 * 获得指定节点的所有叶子节点
 * 
 * @import getNodes from .leaf
 * 
 * @param {data.Record} node 节点
 * 
 * @return {array} 叶子节点集合 
 * 
 */

let {
    hidden
} = node,
result = [];

if(!hidden){

    let {
        expanded,
        children
    } = node ;

    if(expanded && children.length){

        for(let childNode of children){

            result.push(...getNodes(childNode)) ;
        }
    
    }else{

        result.push(node) ;
    }
}

return result ;