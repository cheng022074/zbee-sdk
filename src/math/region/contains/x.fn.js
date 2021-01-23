
/**
 * 
 * 判断横坐标是否在范围之内
 * 
 * @import get from ..get
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
    right
 } = region,
 {
    left:positionOLeft,
    right:positionRight
 } = get(position);

 return positionOLeft >= left && positionRight <= right ;