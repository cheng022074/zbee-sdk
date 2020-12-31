
/**
 * 
 * 获得当前节点作用区域
 * 
 * @import isSized from ..sized scoped
 * 
 * @import getScopeTop from .scope.top scoped
 * 
 * @import getScopeBottom from .scope.bottom scoped
 * 
 * @import getRight from .scope.right scoped
 * 
 * @import getTop from ..top scoped
 * 
 * @import getBottom from ..bottom scoped
 * 
 * @param {data.Record} node 节点
 * 
 * @return {object}  节点作用区域信息
 * 
 */

let {
    x,
    y,
    hidden
} = node ;

 if(isSized(node) && !hidden){ 

    let top = Math.min(getScopeTop(node) , getTop(node , false)),
        bottom = Math.max(getScopeBottom(node) , getBottom(node , false)),
        right = getRight(node) ;

    return {
        x,
        y:top,
        width:right - x,
        height:bottom - top
    } ;
 }

 return {
    x,
    y,
    width:0,
    height:0
} ;
