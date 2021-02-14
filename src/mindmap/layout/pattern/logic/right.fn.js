
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
 * @import getDescendantRegion from ....node.region.descendant.logic scoped
 * 
 * @import getSelfRegion from ....node.region.self scoped
 * 
 * @import getChildRegion from ....node.region.child.logic scoped
 * 
 * @import getHeight from math.region.width
 * 
 * @import setAnchorY from math.region.y.anchor
 * 
 * @import getY from math.region.y
 * 
 * @import from from math.from
 * 
 * @import add from array.add.sort
 * 
 * @import intersect from math.region.intersect
 * 
 * @import contains from math.region.contains
 * 
 * @param {data.Record} node 布局的根节点
 * 
 */

 function main(node){

    layout(node) ;
 }
     
 function layout(node , positionedRegions = []){

    let childNodes = getChildNodes(node) ;

    for(let childNode of childNodes){

      layout(childNode , positionedRegions) ;

    }

    let nodeRegion = from(node) ;

    setAnchorY(nodeRegion , 'center' , getHeight(getChildRegion(node)) / 2) ;

    node.y = getY(nodeRegion) ;

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

