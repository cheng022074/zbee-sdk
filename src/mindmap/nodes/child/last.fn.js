
/**
 * 
 * 获得指定节点的所有尾子节点
 * 
 * @import getNode from .first
 * 
 * @param {data.Record} node 节点
 * 
 * @return {array} 节点集合 
 * 
 */

 let {
    lastChildNodes
 } = node ;

 if(lastChildNodes){

    return lastChildNodes ;
 }

let {
    hidden
} = node;

lastChildNodes = node.lastChildNodes = [] ;

if(!hidden){

    let {
        expanded,
        children
    } = node,
    {
        length
    } = children;


    if(expanded && length){

        let lastChildNode = children[length - 1] ;

        lastChildNodes.push(lastChildNode , getNode(lastChildNode)) ;
    
    }
}

return lastChildNodes ;