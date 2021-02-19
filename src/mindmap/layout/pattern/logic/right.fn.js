
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
     
 function layout(node , layoutedNodes = []){

  let me = this,
  {
    nodeHorizontalSeparationDistance
  } = me;

  if(isRootNode(node)){

    setX(node , 0 , false) ;

  }

  let childNodes = getChildNodes(node),
  {
    length
  } = childNodes,
  {
    top,
    right
  } = getSelfRegion(node);

  right += nodeHorizontalSeparationDistance ;

  for(let i = 0 ; i < length ; i ++){

    let childNode = childNodes[i] ;

    setX(childNode , right) ;

    let previousNode = childNodes[i - 1] ;

    if(previousNode){

      let {
          bottom
      } = getSelfRegion(previousNode) ;

      setY(childNode , bottom) ;

    }else{

      setY(childNode , top) ;
    }

    layout.call(me , childNode , layoutedNodes) ;

    if(previousNode){

      let {
          bottom
      } = getSelfRegion(previousNode) ;

      setY(childNode , bottom) ;

    }

    adjustY.call(me , childNode , layoutedNodes , getDescendantNodes(childNode)) ;

    layoutedNodes.push(childNode) ;
  
  }

  let region = getSelfRegion(node),
      childRegion = getChildRegion(node);

  setAnchorY(region , 'center' , getY(childRegion) + getHeight(childRegion) / 2) ;

  setY(node , getY(region) , false) ;

 }

 function adjustY(node , layoutedNodes , ignoreLayoutedNodes){

  let hasChildren = !!getChildNodes(node).length ;

  let region = hasChildren ? getDescendantRegion(node) : getSelfRegion(node),
  {
    nodeVerticalSeparationDistance
  } = this;

  for(let layoutedNode of layoutedNodes){

    if(ignoreLayoutedNodes.includes(layoutedNode)){

      continue ;

    }

    let layoutedRegion = layoutedNode.children.length ? getDescendantRegion(layoutedNode) : getSelfRegion(layoutedNode) ;

    if(intersect(region , layoutedRegion)){

        setOffsetY(node , layoutedRegion.bottom - region.top + nodeVerticalSeparationDistance) ;

        region = hasChildren ? getDescendantRegion(node) : getSelfRegion(node) ;

    }
  }

  if(hasChildren){

    let region = getSelfRegion(node) ;

    for(let layoutedNode of layoutedNodes){

      if(ignoreLayoutedNodes.includes(layoutedNode)){
  
        continue ;
  
      }
  
      let layoutedRegion = layoutedNode.children.length ? getDescendantRegion(layoutedNode) : getSelfRegion(layoutedNode) ;
  
      if(intersect(region , layoutedRegion)){
  
          setOffsetY(node , layoutedRegion.bottom - region.top + nodeVerticalSeparationDistance) ;
  
          region = hasChildren ? getDescendantRegion(node) : getSelfRegion(node) ;
  
      }
    }
  }

  setOffsetY(node , nodeVerticalSeparationDistance) ;
}

