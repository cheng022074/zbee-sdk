
/**
 * 
 * 被动取消省略
 * 
 * @import getParentNode from ....parent scoped
 * 
 * @import getLevel from ....level scoped
 * 
 * @import getDeepestLeafNode from ....leaf.deepest scoped
 * 
 * @import getRootNode from ....root scoped
 * 
 * @import ellipsis from ....ellipsis scoped
 * 
 */

 let {
    ellipsisNodes,
    visibilityLevel,
    ellipsisRootNode
 } = this,
 deepestLeafNode = getDeepestLeafNode(getRootNode()),
 level = getLevel(deepestLeafNode);

if(level < visibilityLevel || level > visibilityLevel){

    for(let ellipsisNode of ellipsisNodes){

        ellipsisNode.hidden = false ;
    }

    ellipsisNodes.length = 0 ;

    if(ellipsisRootNode){

        ellipsisRootNode.ellipsis = false ;
    }

    ellipsis(deepestLeafNode , visibilityLevel) ;

}