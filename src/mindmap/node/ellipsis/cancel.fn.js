
/**
 * 
 * 取消省略
 * 
 * @import getParentNode from ..parent scoped
 * 
 * @import show from ..show scoped
 * 
 * @import ellipsis from ..ellipsis scoped
 * 
 */

 let {
    ellipsisRootNode
 } = this ;

 if(ellipsisRootNode){

    let {
        children
    } = ellipsisRootNode ;

    for(let childNode of children){

        show(childNode) ;
    }

    ellipsisRootNode.ellipsis = false ;

    let parentNode = getParentNode(ellipsisRootNode) ;

    if(parentNode){

        parentNode.hidden = false ;
    }

    ellipsis(ellipsisRootNode , 1) ;
    
 }