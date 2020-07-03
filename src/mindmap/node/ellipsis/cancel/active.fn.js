/**
 * 
 * 主动取消省略
 * 
 * @import getParentNode from ....parent scoped
 * 
 * @import getDeepestLeafNodes from ......nodes.leaf.deepest scoped
 * 
 * @imoprt cancelEllipsis from .passive scoped
 * 
 */

let {
    ellipsisRootNode
 } = this ;

 if(ellipsisRootNode){

    let deepestLeafNodes = getDeepestLeafNodes(ellipsisRootNode);

    for(let deepestLeafNode of deepestLeafNodes){

        deepestLeafNode.hidden = false ;

        getParentNode(deepestLeafNode).expanded = false ;
    }

    cancelEllipsis() ;
 }