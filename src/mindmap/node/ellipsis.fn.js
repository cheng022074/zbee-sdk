
/**
 * 
 * 从该节点开始省略
 * 
 * @import getAncestorNode from .ancestor scoped
 * 
 * @import getDescendantNodes from ..nodes.relation.descendant scoped
 * 
 * @import ellipsis from .ellipsis scoped
 * 
 * @param {data.Record} node  脑图节点
 * 
 * @param {number} level 省略脑图节点层次
 * 
 */

 let ancestorNode = getAncestorNode(node , level);

 if(ancestorNode){

    if(ancestorNode.ellipsis === true){

        return ancestorNode;
    }

    let nodes = getDescendantNodes(ancestorNode),
        excludeRootNode = getAncestorNode(node , level - 1),
        excludeNodes = [
            excludeRootNode,
            ...getDescendantNodes(excludeRootNode)
        ];

    for(let node of nodes){

        if(!excludeNodes.includes(node)){

            node.hidden = true ;
        }
    }

    // 这里要考虑节点大小不一致的情况
    
    ancestorNode.y = excludeRootNode.y ;

 }else{

    ellipsis(node , level - 1) ;

 }