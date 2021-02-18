
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
 * @import contains from math.region.contains.x
 * 
 * @param {data.Record} node 布局节点
 * 
 */

 function main(node){

  let me = this ;

  layout.call(me , node) ;

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
  offsetX = left,
  offsetY = 0;

  if(width > mindmapWidth){

    mindmapWidth = width ;
  
  }

  if(height > mindmapHeight){

    let region = getSelfRegion(node) ;

    setAnchorY(region , 'center' , height / 2) ;

    setY(node , getY(region)) ;

    mindmapHeight = height ;
  
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
     
 function layout(node , positionedRegions = []){

  let me = this;

  adjustX.call(me , node , getParentNode(node)) ;

  let childNodes = getChildNodes(node),
  {
    length
  } = childNodes;

  for(let i = 0 ; i < length ; i ++){

    let childNode = childNodes[i] ;

    layout.call(me , childNode , positionedRegions) ;
    
    let previousSiblingNode = childNodes[i - 1] ;

    if(previousSiblingNode){

      let {
        bottom
      } = getSelfRegion(previousSiblingNode) ;

      setY(childNode , bottom) ;

      adjustY.call(me , childNode , getRegion(childNode) , positionedRegions) ;
    
    }

    let region = getChildRegion(childNode) ;

    if(getWidth(region) !== 0){
      
      add(positionedRegions , region , sortPositionedRegions) ;

    }

  }

  let region = getSelfRegion(node),
      childRegion = getChildRegion(node);

  setAnchorY(region , 'center' , getY(childRegion) + getHeight(childRegion) / 2) ;

  setY(node , getY(region) , false) ;

 }

 function adjustX(node , parentNode){

  let {
    nodeHorizontalSeparationDistance
  } = this ;

   if(parentNode){

      setX(node , getSelfRegion(parentNode).right + nodeHorizontalSeparationDistance , false) ;
   
    }else{

      setX(node , 0 , false) ;
   }
 }

 function adjustY(node , region , positionedRegions){

  let {
    top
  } = region,
  {
    nodeVerticalSeparationDistance
  } = this;

  for(let positionedRegion of positionedRegions){

    let {
        bottom
    } = positionedRegion ;

    if(intersect(region , positionedRegion)){

        setOffsetY(node , bottom - top + nodeVerticalSeparationDistance) ;

        return ;
    }
  }

  setOffsetY(node , nodeVerticalSeparationDistance) ;
}

 function sortPositionedRegions({
    bottom:bottom1
 } , {
    bottom:bottom2
 }){

   return bottom2 - bottom1 ;
 }

