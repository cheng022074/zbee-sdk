
/**
 * 
 * 获得指定节点的所有尾子节点
 * 
 * @import getNodes from .last
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

        let lastChildNode = children[length - 1],
        {
            hidden
        } = lastChildNode;

        if(!hidden){

            lastChildNodes.push(lastChildNode , ...getNodes(lastChildNode)) ;
        }

    }
}

return lastChildNodes ;