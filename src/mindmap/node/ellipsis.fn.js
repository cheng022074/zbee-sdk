
/**
 * 
 * 从该节点开始省略
 * 
 * @import getAncestorNode from .ancestor scoped
 * 
 * @import getAncestorNodes from ..nodes.relation.ancestor scoped
 * 
 * @import getDescendantNodes from ..nodes.relation.descendant scoped
 * 
 * @import show from .show scoped
 * 
 * @import doCenterXY from math.region.xy.center
 * 
 * @import from from math.region.from
 * 
 * @param {data.Record} node  脑图节点
 * 
 * @param {number} level 省略脑图节点层次
 * 
 */

 if(level === 0){

    return ;
 }

 let me = this,
     ancestorNode = getAncestorNode(node , level),
     {
        ellipsisRootNode,
        ellipsisNodes
     } = me;
     
if(ancestorNode){

    if(ellipsisRootNode === ancestorNode){

        return ;
    }

    let excludeRootNode = getAncestorNode(node , level - 1),
        excludeNodes = [
            excludeRootNode,
            ...getDescendantNodes(excludeRootNode)
        ] ;

    {
        let nodes = getAncestorNodes(ancestorNode),
            {
                length
            } = nodes;

        if(length){

            let hiddenAncestorNode = nodes[length - 1],
                descendantNodes = getDescendantNodes(hiddenAncestorNode) ;

            hiddenAncestorNode.hidden = true ;

            ellipsisNodes.push(hiddenAncestorNode) ;

            for(let descendantNode of descendantNodes){

                if(!excludeNodes.includes(descendantNode) && descendantNode !== ancestorNode){

                    descendantNode.hidden = true ;

                    ellipsisNodes.push(descendantNode) ;
                }
            }
        }
    }

    let nodes = getDescendantNodes(ancestorNode);

    for(let node of nodes){

        if(!excludeNodes.includes(node)){

            node.hidden = true ;

            ellipsisNodes.push(node) ;
        }
    }

    ancestorNode.ellipsis = true ;

}