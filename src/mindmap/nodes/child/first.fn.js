
/**
 * 
 * 获得指定节点的所有首子节点
 * 
 * @import getNode from .first
 * 
 * @param {data.Record} node 节点
 * 
 * @return {array} 节点集合 
 * 
 */

 let {
    firstChildNodes
 } = node ;

 if(firstChildNodes){

    return firstChildNodes ;
 }

let {
    hidden
} = node;

firstChildNodes = node.firstChildNodes = [] ;

if(!hidden){

    let {
        expanded,
        children
    } = node ;


    if(expanded && children.length){

        let firstChildNode = children[0] ;

        firstChildNodes.push(firstChildNode , getNode(firstChildNode)) ;
    
    }
}

return firstChildNodes ;