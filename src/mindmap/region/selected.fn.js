
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
 * @import getRegion from ..region scoped
 * 
 * @return {math.Region} 区域 
 * 
 */

 let {
    selectedNode,
    height,
    padding
 } = this,
 {
     x,
     y,
     width:nodeWidth,
     height:nodeHeight
 } = selectedNode;

let selectedRegion = {
    x:x + padding,
    y:y + padding,
    width:nodeWidth,
    height:nodeHeight
}

 return createRegion(selectedRegion.y , right(selectedRegion) , bottom(selectedRegion) , selectedRegion.x) ;

