
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
   rootNode,
   leafNodes,
   padding,
   width:mindmapWidth,
   height:mindmapHeight
 } = me,
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

padding *= 2 ;

let width = right - left,
      height = bottom - top ;

if(mindmapHeight > height){

   height = mindmapHeight ;

}else{

   height += padding ;
}

if(mindmapWidth > width){

   width = mindmapWidth;

}else{

   width += padding;

}

return me.region = {
   left,
   right,
   top,
   bottom,
   width,
   height
} ;

 