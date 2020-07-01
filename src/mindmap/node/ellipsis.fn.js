
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

    let {
        y
    } = doCenterXY(from(excludeRootNode)),
    {
        ellipsisNodeWidth,
        ellipsisNodeHeight
    } = this,
    {
        width,
        height
    } = excludeRootNode,
    region = from({
        x:excludeRootNode.x - (ellipsisNodeWidth - width),
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

    ancestorNode.beforeEllipsisWidth = width ;

    ancestorNode.beforeEllipsisHeight = height ;

    ancestorNode.width = ellipsisNodeWidth ;

    ancestorNode.height = ellipsisNodeHeight ;

    ancestorNode.ellipsis = true ;

 }else{

    ellipsis(node , level - 1) ;

 }