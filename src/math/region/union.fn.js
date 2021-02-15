
/**
 * 
 * 范围联合
 * 
 * @param {object} region1 范围1
 * 
 * @param {object} region2 范围2
 * 
 * @return {object} 范围
 * 
 */

 const {
    min,
    max
 } = Math ;

 return {
    top:min(region1.top , region2.top),
    bottom:max(region1.bottom , region2.bottom),
    left:min(region1.left , region2.left),
    right:max(region1.right , region2.right)
 } ;