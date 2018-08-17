
/**
 * 
 * 判断坐标是否包含在当前圆的范围内
 * 
 * @import distance from math.point.distance 
 * 
 * 
 * @param {object} xy 坐标
 * 
 * @return {boolean} 如果在圆范围内，则返回 true ，否则返回 false
 * 
 */

let {
    circleXY,
    radius
} = this ;

return distance(circleXY , xy) <= radius ;