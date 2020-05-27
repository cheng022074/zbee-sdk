
/**
 * 
 * 显示节点
 * 
 * @import isLeaf from .is.leaf scoped
 * 
 * @import getLeafNodes from ..nodes.leaf scoped
 * 
 * @import show from .show scoped
 * 
 * @param {data.Record} node 节点
 * 
 */

let {
    hidden
 } = node ;

 if(hidden){

    return ;
 }

let {
    expanded
} = node;

if(expanded && !isLeaf(node)){

    let leafNodes,
        length;

    while(leafNodes = getLeafNodes(node),length = leafNodes.length){

        if(length === 1 && leafNodes[0] === node){

            break ;
        }

        for(let leafNode of leafNodes){

            leafNode.hidden = true ;
        }
    }
}

node.hidden = true ;