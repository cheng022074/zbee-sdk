
/**
 * 
 * 平移
 * 
 * @import isObject from is.object.simple
 * 
 * @import doX from .x
 * 
 * @import doY from .y
 * 
 * @import get from .get
 * 
 * @param {object} region 目标范围
 * 
 * @param {object} [xy] 坐标
 */

 if(!isObject(xy)){

    return {
        x:doX(region , x),
        y:doY(region , y)
    } ;
 }

 let {
    x,
    y
 } = xy ;

doX(region , x) ;

doY(region , y) ;