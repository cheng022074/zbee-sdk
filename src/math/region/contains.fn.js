
/**
 * 
 * 判断位置是否在指定区域之内
 * 
 * @import from from .from
 * 
 * @param {object} region 参照范围
 * 
 * @param {mixed} position 位置
 * 
 * @return {boolean}  如果指定位置在指定区域之内则返回 true , 否则返回 false 
 * 
 */

let {
    left,
    top,
    right,
    bottom
 } = region,
 {
    left:positionOLeft,
    top:positionTop,
    right:positionRight,
    bottom:positionBottom,
 } = from(position);
 
 return positionOLeft >= left && positionRight <= right && regionY >= y && positionBottom <= bottom;