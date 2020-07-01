
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
 * @import doCenterXY from math.region.xy.center
 * 
 * @import from from math.region.from
 * 
 * @param {data.Record} node  脑图节点
 * 
 * @param {number} level 省略脑图节点层次
 * 
 */

 let me = this,
     ancestorNode = getAncestorNode(node , level),
     {
        ellipsisRootNode
     } = me;
     
if(ancestorNode){

    if(ellipsisRootNode === ancestorNode){

        return ;
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

    let {
        y
    } = doCenterXY(from(excludeRootNode)),
    {
        ellipsisNodeWidth,
        ellipsisNodeHeight
    } = me,
    region = from({
        x:excludeRootNode.x - (ellipsisNodeWidth - excludeRootNode.width),
        y:excludeRootNode.y,
        width:ellipsisNodeWidth,
        height:ellipsisNodeHeight
    }),
    {
        x
    } = doCenterXY(region);

    doCenterXY(region , {
        x,
        y
    }) ;

    ancestorNode.y = region.top ;

    ancestorNode.ellipsis = true ;

 }else{

    ellipsis(node , level - 1) ;

 }