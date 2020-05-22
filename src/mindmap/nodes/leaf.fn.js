
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
    leafNodes
} = node ;

if(leafNodes){

    return leafNodes ;
}

let {
    hidden
} = node ;

leafNodes = node.leafNodes = [] ;

if(!hidden){

    let {
        expanded,
        children
    } = node ;

    if(expanded && children.length){

        for(let childNode of children){

            leafNodes.push(...getNodes(childNode)) ;
        }
    
    }else{

        leafNodes.push(node) ;
    }
}

return leafNodes ;