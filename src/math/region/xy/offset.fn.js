/**
 * 
 * 偏移
 * 
 * @import get from math.region.get
 * 
 * @import setXY from ..xy
 * 
 * @import getXY from ..xy
 * 
 * @param {mixed} region 范围
 * 
 * @param {object} offsetXY 偏移量
 * 
 */

 region = get(region) ;

 let {
    x,
    y
 } = getXY(region),
 {
    x:offsetX,
    y:offsetY
 } = offsetXY;

 x += offsetX ;

 y += offsetY ;

setXY(region , {
    x,
    y
}) ;