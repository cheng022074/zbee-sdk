
/**
 * 
 * 获得选中节点的方位信息
 * 
 * @import bottom from math.region.bottom
 * 
 * @import right from math.region.right
 * 
 * @import createRegion from math.region
 * 
 * @return {math.Region} 区域 
 * 
 */

 let {
     x,
     y,
     width,
     height
 } = this.selectedNode ;

 return createRegion(y , right(x , width) , bottom(y , height) , x) ;

