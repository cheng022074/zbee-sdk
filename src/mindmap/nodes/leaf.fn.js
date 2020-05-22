
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
leafNodes = [] ;

if(!hidden){

    let {
        expanded,
        children
    } = node ;


    if(expanded && children.length){

        for(let childNode of children){

            leafNodes.push(...getNodes(childNode)) ;
        }

        if(!leafNodes.length){

            leafNodes.push(node) ;
        }
    
    }else{

        leafNodes.push(node) ;
    }
}

return leafNodes ;