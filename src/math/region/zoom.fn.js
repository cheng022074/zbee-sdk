
/**
 * 
 * 缩放当前目标范围
 * 
 * @import get from .get
 * 
 * @import width from .width
 * 
 * @import height from .height
 * 
 * @param {object} region 目标范围
 * 
 * @param {number} scale 缩放值
 * 
 * @return {object} 缩放后的目标范围
 * 
 */

 region = get(region) ;

 let {
    left,
    top
 } = region,
 right = left + width(region) * scale,
 bottom = top + height(region) * scale ;

 return {
    left,
    right,
    top,
    bottom
 } ;



 

 