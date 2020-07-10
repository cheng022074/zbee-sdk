
/**
 * 
 * 获取范围超出另外一个范围的偏移植
 * 
 * @import getOutOfBoundOffsetX from  .outOfBoundOffset.x
 * 
 * @import getOutOfBoundOffsetY from .outOfBoundOffset.y
 * 
 * @param {object} baseRegion 参照范围
 * 
 * @param {object} region 范围
 * 
 * @param {number} region.left 范围左
 * 
 * @param {number} region.right  范围右
 * 
 * @param {number} region.top 范围上
 * 
 * @param {number} region.bottom 范围下
 * 
 * @return {object} 偏移植
 * 
 */

 const {
    abs
 } = Math ;

left = getOutOfBoundOffsetX(baseRegion , left) ;

right = getOutOfBoundOffsetX(baseRegion , right) ;

if(abs(left) < abs(right)){

   left = right ;
}

top = getOutOfBoundOffsetY(baseRegion , top) ;

bottom = getOutOfBoundOffsetY(baseRegion , bottom) ;

if(abs(top) < abs(bottom)){

   top = bottom ;
}

return {
   x:left,
   y:top
} ;