
/**
 * 
 * 获得当前节点作用区域
 * 
 * @import isSized from ..sized scoped
 * 
 * @import getTop from .scope.top scoped
 * 
 * @import getBottom from .scope.bottom scoped
 * 
 * @import getRight from .scope.right scoped
 * 
 * @import getBottomXY from ..xy.bottom scoped
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

    let top = Math.min(getTop(node) , y),
        bottom = Math.max(getBottom(node) , getBottomXY(node).y),
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
