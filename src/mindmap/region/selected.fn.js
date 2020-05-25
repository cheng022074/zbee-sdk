
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
 * @import getData from ..node.data scoped
 * 
 * @return {math.Region} 区域 
 * 
 */

 let {
    selectedNode
 } = this,
 region = getData(selectedNode) ;

 return createRegion(region.y , right(region) , bottom(region) , region.x) ;

