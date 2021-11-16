
/**
 * 
 * 向右逻辑图算法实现
 * 
 * @import setX from ....node.x scoped
 * 
 * @import setY from ....node.y scoped
 * 
 * @import setOffsetY from ....node.y.offset scoped
 * 
 * @import isRootNode from ....node.is.root scoped
 * 
 * @import getParentNode from ....node.parent scoped
 * 
 * @import getChildNodes from ....nodes.child scoped
 * 
 * @import getDescendantNodes from ....nodes.descendant scoped
 * 
 * @import getDescendantRegion from ....node.region.descendant.logic scoped
 * 
 * @import getSelfRegion from ....node.region.self scoped
 * 
 * @import getChildRegion from ....node.region.child.logic scoped
 * 
 * @import getCompensateLeftRegion from ....node.region.child.logic.compensate.left scoped
 * 
 * @import getHeight from math.region.height
 * 
 * @import getWidth from math.region.width
 * 
 * @import setAnchorY from math.region.y.anchor
 * 
 * @import setRegionOffsetY from math.region.y.offset
 * 
 * @import getAnchorY from math.region.y.anchor
 * 
 * @import getY from math.region.y
 * 
 * @import contains from math.region.contains.x
 * 
 * @import from from math.region.from
 * 
 * @import createLayoutedRegions from .regions.layouted
 * 
 * @param {data.Record} node 布局节点
 * 
 */

 function main(node){

    let me = this;
  
    layout.call(me , node) ;
  
    let {
        width,
        height,
        padding
    } = this,
    region = {
        top:0,
        bottom:height,
        left:0,
        right:width
    },
    {
      left,
      right,
      top,
      bottom
    } = padding,
    regionHeight = getHeight(region),
    mindmapWidth = getWidth(region) + left + right,
    mindmapHeight = regionHeight + top + bottom,
    offsetX = left,
    offsetY = 0;
  
    if(width > mindmapWidth){
  
      mindmapWidth = width ;
    
    }
  
    if(height > mindmapHeight){
  
      mindmapHeight = height ;
  
      let y = getY(region),
          offsetY = (height - regionHeight) / 2;
  
      if(y < 0){
  
          setOffsetY(node , - y + offsetY) ;
      
      }else{
  
          setOffsetY(node , offsetY) ;
      }
    
    }else{
  
      offsetY = top ;
  
      setOffsetY(node , - getY(region)) ;
    }
  
    return {
      offset:{
        x:offsetX,
        y:offsetY
      },
      size:{
        width:mindmapWidth,
        height:mindmapHeight
      } 
    } ;
}

function layout(){


}