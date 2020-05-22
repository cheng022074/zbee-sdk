
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
 * @return {object} 区域数据 
 * 
 */

 let me = this,
 {
   leafNodes,
   padding,
   width:mindmapWidth,
   height:mindmapHeight
 } = me,
 left = 0,
 top,
 right,
 bottom,
 isInit = true;

leafNodes = leafNodes.values() ;

for(let leafNode of leafNodes){

   let {
      x:rightX
   } = getRightXY(leafNode),
   {
      y:topY
   } = getTopXY(leafNode),
   {
      y:bottomY
   } = getBottomXY(leafNode);

   if(isInit){

      top = topY ;

      right = rightX ;

      bottom = bottomY ;

      isInit = false ;

      continue ;
   }

   if(right < rightX){

      right = rightX ;
   }

   if(bottom < bottomY){

      bottom = bottomY ;
   }

   if(top > topY){

      top = topY ;
   }
}

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

return {
   left,
   right,
   top,
   bottom,
   width,
   height
} ;

 