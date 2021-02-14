
/**
 * 
 * 判断两个范围是否相交
 * 
 * @param {object} region1 范围1
 * 
 * @param {object} region2 范围2
 * 
 * @return {boolean} 如果两者相交则返回 true , 否则返回 false
 * 
 */

return min(region1.bottom , region2.bottom) > max(region1.top , region2.top) && min(region1.right , region2.right) > max(region1.left , region2.left) ;