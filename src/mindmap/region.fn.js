
/**
 * 
 * 获取当前脑图区域
 * 
 * @import getRightXY from .node.xy.right scoped
 * 
 * @import getTopXY from .node.xy.top scoped
 * 
 * @import getBottomXY from .node.xy.bottom scoped
 * 
 * @import getRegion from .node.region.scope scoped
 * 
 * @import getRootNode from .node.root scoped
 * 
 * @return {object} 区域数据 
 * 
 */

 let me = this,
 {
   region
 } = me;

 if(region){

   return region ;
 }

 let {
   leafNodes,
   padding,
   width:mindmapWidth,
   height:mindmapHeight
 } = me,
 rootNode = getRootNode(),
 left = 0,
 right,
 bottom,
 {
   x,
   y:top,
   width:rootNodeRegionWidth,
   height:rootNodeRegionHeight
 } = getRegion(rootNode) ;

 right = x + rootNodeRegionWidth ;

 bottom = top + rootNodeRegionHeight ;

let width = right - left + padding.left + padding.right,
    height = bottom - top + padding.top + padding.bottom;

if(mindmapHeight > height){

   height = mindmapHeight ;

}

if(mindmapWidth > width){

   width = mindmapWidth;

}

return me.region = {
   left,
   right,
   top,
   bottom,
   width,
   height
} ;

 