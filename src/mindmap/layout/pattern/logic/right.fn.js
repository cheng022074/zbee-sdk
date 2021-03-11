
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
 * @import getHeight from math.region.height
 * 
 * @import getWidth from math.region.width
 * 
 * @import setAnchorY from math.region.y.anchor
 * 
 * @import getAnchorY from math.region.y.anchor
 * 
 * @import getY from math.region.y
 * 
 * @import add from array.add.sort
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

  node.x = 0 ;

  node.y = 0 ;

  layout.call(me , node , createLayoutedRegions(me)) ;

  let region = getDescendantRegion(node , true),
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
     
 function layout(node , layoutedChildRegions){

  let me = this,
  {
    nodeHorizontalSeparationDistance,
    nodeVerticalSeparationDistance
  } = me.layoutConfig;

  let childNodes = getChildNodes(node),
  {
    length
  } = childNodes,
  nodeRegion = getSelfRegion(node),
  {
    top,
    right
  } = nodeRegion;

  right += nodeHorizontalSeparationDistance ;

  for(let i = 0 ; i < length ; i ++){

    let childNode = childNodes[i] ;

    setX(childNode , right) ;

    let previousSiblingNode = childNodes[i - 1];

    if(previousSiblingNode){

      setY(childNode , getSelfRegion(previousSiblingNode).bottom + nodeVerticalSeparationDistance) ;
      
    }else{

      setY(childNode , top) ;
    }

    layout.call(me , childNode , layoutedChildRegions) ;

    if(i !== 0){

      let adjustNodes = childNodes.slice(0 , i) ;

      if(getChildNodes(childNode).length){

          let region = getChildRegion(childNode) ;

                      region.left -= 45 ;

          layoutedChildRegions.adjustNodeYByInclusionPolicy(childNode , region , adjustNodes) ;

          let descendantNodes = getDescendantNodes(childNode) ;

          for(let descendantNode of descendantNodes){

              if(getChildNodes(descendantNode).length){

                  let region = getChildRegion(descendantNode) ;

                  region.left -= 45 ;

                  layoutedChildRegions.adjustNodeYByInclusionPolicy(childNode , region , adjustNodes) ;
              
              }
          }
      
      }
  }else{

    layoutedChildRegions.adjustNodeYByInclusionPolicy(childNode , getSelfRegion(childNode) , adjustNodes) ;
}

    layoutedChildRegions.add(childNode , true) ;
  }

  let childRegion = getChildRegion(node),
      childrenHeight = getHeight(childRegion),
      nodeHeight = getHeight(nodeRegion);

  if(childrenHeight !== nodeHeight){

    let offsetY = nodeRegion.top - (childrenHeight - nodeHeight) / 2 - childRegion.top ;
    
    for(let childNode of childNodes){

      setOffsetY(childNode , offsetY) ;

    }
  }
}