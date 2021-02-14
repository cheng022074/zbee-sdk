
/**
 * 
 * 向右逻辑图算法实现
 * 
 * @import setX from ..node.x scoped
 * 
 * @import setY from ..node.y scoped
 * 
 * @import setOffsetY from ..node.y.offset scoped
 * 
 * @import getPreviousSiblingNode from ..node.sibling.previous scoped
 * 
 * @import getParentNode from ..node.parent scoped
 * 
 * @import getChildNodes from ..nodes.child scoped
 * 
 * @import getFirstDescendantNodes from ..nodes.descendant.first scoped
 * 
 * @import getNodeRegion from ..node.region.self scoped
 * 
 * @import getChildRegion from ..node.region.child.logic scoped
 * 
 * @import getHeight from math.region.width
 * 
 * @import setAnchorY from math.region.y.anchor
 * 
 * @import getY from match.region.y
 * 
 * @import from from math.from
 * 
 * @import add from array.add.sort
 * 
 * @import intersect from math.region.intersect
 * 
 * @param {data.Record} rootNode 布局的根节点
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

    setAnchorY(nodeRegion , getHeight(getChildRegion(node)) / 2 , 'center') ;

    node.y = getY(nodeRegion) ;

    let previousSiblingNode = getPreviousSiblingNode(node) ;

    if(previousSiblingNode){

      setY(node , getNodeRegion(previousSiblingNode).bottom) ;

      adjustY(node , getFirstDescendantNodes(node) , positionedRegions) ;
    
    }

    adjustX(node , getParentNode(node)) ;

    add(positionedRegions , getNodeRegion(node) , sortPositionedRegions) ;
 }

 function adjustX(node , parentNode){

   if(parentNode){

      setX(node , getNodeRegion(parentNode).right) ;
   }
 }

 function adjustY(node , firstDescendantNodes , positionedRegions){

   for(let firstDescendantNode of firstDescendantNodes){

      let region = getNodeRegion(firstDescendantNode),
      {
         top
      } = region;

      for(let positionedRegion of positionedRegions){

         let {
            bottom
         } = positionedRegion ;

         if(top > bottom && intersect(region , positionedRegion)){

            setOffsetY(node , top - bottom) ;

            break ;
         }
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

