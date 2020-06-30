
/**
 * 
 * 从该节点开始省略
 * 
 * @import getAncestorNode from .ancestor scoped
 * 
 * @import getDescendantNodes from ..nodes.descendant scoped
 * 
 * @param {data.Record} node  脑图节点
 * 
 */

 let ancestorNode = getAncestorNode(node);

 if(ancestorNode){

    let nodes = [
        ancestorNode,
        ...getDescendantNodes(ancestorNode)
    ],
    excludeNodes = [
        node,
        ...getDescendantNodes(node)
    ];

    for(let node of nodes){

        if(excludeNodes.includes(node)){

            node.hidden = true ;
        }
    }
 }