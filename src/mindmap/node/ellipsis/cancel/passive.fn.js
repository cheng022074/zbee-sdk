
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
 * @import ellipsis from ....ellipsis scoped
 * 
 */

 let {
    ellipsisRootNode,
    ellipsisNodes,
    visibilityLevel
 } = this ;

 if(ellipsisRootNode){

    let deepestLeafNode = getDeepestLeafNode(ellipsisRootNode) ;

    if(getLevel(deepestLeafNode) < visibilityLevel){

        for(let ellipsisNode of ellipsisNodes){
    
            ellipsisNode.hidden = false ;
        }

        ellipsisNodes.length = 0 ;
    
        ellipsisRootNode.ellipsis = false ;
    

        ellipsis(deepestLeafNode , visibilityLevel) ;
    }
    
 }