/**
 * 
 * 主动取消省略
 * 
 * @import getParentNode from ....parent scoped
 * 
 * @import getDeepestLeafNodes from ......nodes.leaf.deepest scoped
 * 
 * @import cancelEllipsis from .passive scoped
 * 
 * @import layout from ......layout scoped
 * 
 * @import select from ......select scoped
 * 
 */

let {
    ellipsisRootNode
 } = this ;

 if(ellipsisRootNode){

    let deepestLeafNodes = getDeepestLeafNodes(ellipsisRootNode);

    for(let deepestLeafNode of deepestLeafNodes){

        deepestLeafNode.hidden = true ;

        getParentNode(deepestLeafNode).expanded = false ;
    }

    cancelEllipsis() ;

    select(ellipsisRootNode.id , false) ;

    layout() ;
 }