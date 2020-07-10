
/**
 * 
 * 取消忽略
 * 
 * 
 */

 let {
    ellipsisRootNode,
    ellipsisNodes
 } = this ;

 if(ellipsisRootNode){

    ellipsisRootNode.ellipsis = false ;

    for(let ellipsisNode of ellipsisNodes){

        ellipsisNode.hidden = false ;
    }

    ellipsisNodes.length = 0 ;
 }