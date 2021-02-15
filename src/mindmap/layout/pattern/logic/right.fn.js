
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
 * @import getPreviousSiblingNode from ....node.sibling.previous scoped
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
 * @import getRegion from ....node.region.logic scoped
 * 
 * @import getHeight from math.region.height
 * 
 * @import getWidth from math.region.width
 * 
 * @import setAnchorY from math.region.y.anchor
 * 
 * @import getY from math.region.y
 * 
 * @import add from array.add.sort
 * 
 * @import intersect from math.region.intersect
 * 
 * @import contains from math.region.contains
 * 
 * @param {data.Record} node 布局节点
 * 
 */

 function main(node){

    layout(node) ;

    let region = getRegion(node),
    {
      width,
      height,
      padding
    } = this,
    {
      left,
      right,
      top,
      bottom
    } = padding,
    mindmapWidth = getWidth(region) + left + right,
    mindmapHeight = getHeight(region) + top + bottom,
    offsetX = 0,
    offsetY = 0;

    if(width > mindmapWidth){

      mindmapWidth = width ;
    
    }else{

      offsetX = left ;
    }

    if(height > mindmapHeight){

      let region = getSelfRegion(node) ;

      setAnchorY(region , 'center' , height / 2) ;

      setY(node , getY(region)) ;

      mindmapHeight = height ;
    
    }else{

      offsetY = top ;

      setY(node , - getY(region)) ;
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
     
 function layout(node , positionedRegions = []){

    let childNodes = getChildNodes(node) ;

    for(let childNode of childNodes){

      layout(childNode , positionedRegions) ;

    }

    let region = getSelfRegion(node) ;

    setAnchorY(region , 'center' , getHeight(getChildRegion(node)) / 2) ;

    node.y = getY(region) ;

    let previousSiblingNode = getPreviousSiblingNode(node) ;

    if(previousSiblingNode){

      setY(node , getSelfRegion(previousSiblingNode).bottom) ;

      adjustY(node , getDescendantRegion(node) , positionedRegions) ;
    
    }

    adjustX(node , getParentNode(node)) ;

    add(positionedRegions , getSelfRegion(node) , sortPositionedRegions) ;
 }

 function adjustX(node , parentNode){

   if(parentNode){

      setX(node , getSelfRegion(parentNode).right) ;
   }
 }

 function adjustY(node , region , positionedRegions){

   let {
      top
   } = region ;

   for(let positionedRegion of positionedRegions){

      let {
         bottom
      } = positionedRegion ;

      if(top > bottom && (intersect(region , positionedRegion) || contains(region , positionedRegion) || contains(positionedRegion , region))){

         setOffsetY(node , top - bottom) ;

         break ;
      }
   }
 }

 function sortPositionedRegions({
    bottom:bottom1
 } , {
    bottom:bottom2
 }){

   return bottom1 - bottom2 ;
 }

