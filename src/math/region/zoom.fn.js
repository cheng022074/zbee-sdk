
/**
 * 
 * 缩放当前目标范围
 * 
 * @import width from .width
 * 
 * @import height from .height
 * 
 * @param {object} target 目标范围
 * 
 * @param {number} scale 缩放值
 * 
 * @return {object} 缩放后的目标范围
 * 
 */

 let {
    left,
    top
 } = target,
 right = left + width(target) * scale,
 bottom = top + height(target) * scale ;

 return {
    left,
    right,
    top,
    bottom
 } ;



 

 