
/**
 * 
 * 判断两个范围是否水平相交
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

return min(region1.right , region2.right) > max(region1.left , region2.left) ;