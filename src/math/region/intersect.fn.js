
/**
 * 
 * 判断两个范围是否相交
 * 
 * @import horizontal from .intersect.horizontal
 * 
 * @import vertical from .intersect.vertical
 * 
 * @param {object} region1 范围1
 * 
 * @param {object} region2 范围2
 * 
 * @return {boolean} 如果两者相交则返回 true , 否则返回 false
 * 
 */

 const {
    min,
    max
 } = Math ;

return vertical(region1 , region2) && horizontal(region1 , region2) ;