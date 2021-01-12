
/**
 * 
 * 获得选中节点的方位信息
 * 
 * @import from from math.region.from
 * 
 * @import move from math.region.move
 * 
 * @import getRegion from ..region scoped
 * 
 * @return {math.Region} 区域 
 * 
 */

 let {
    height,
    padding,
    selectedNode
 } = this,
 {
    height:regionHeight
 } = getRegion(),
 heightPadding = 0;

 if(height !== regionHeight){

    heightPadding = padding.top ;
 }

 return move(from(selectedNode) , {
    x:padding,
    y:heightPadding
 }) ;

