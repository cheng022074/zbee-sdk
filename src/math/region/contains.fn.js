
/**
 * 
 * 判断位置是否在指定区域之内
 * 
 * @import containsY from .contains.y
 * 
 * @import containsX from .contains.x
 * 
 * @import get from .get
 * 
 * @param {object} region 参照范围
 * 
 * @param {mixed} position 位置
 * 
 * @return {boolean}  如果指定位置在指定区域之内则返回 true , 否则返回 false 
 * 
 */

 region = get(region) ;

 position = get(position) ;

 return containsX(region , position) && containsY(region , position);