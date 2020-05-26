
/**
 * 
 * 根据坐标定位节点
 * 
 * @import getData from .data scoped
 * 
 * @import layout from ..layout scoped
 * 
 * @import defer from function.defer
 * 
 * @param {object} xy 坐标
 * 
 * @return {object} 节点信息 
 * 
 */

 let me = this,
 {
    visibilityNodes,
    previousFindedNode,
    placeholderNode
 } = me,
 findedNode = visibilityNodes.getNearestParentNode(xy);

 if(previousFindedNode !== findedNode){
    
   if(previousFindedNode){

      let {
         children,
         expanded
      } = previousFindedNode ;
   
      if(expanded){
   
         if(children.includes(placeholderNode)){
   
            placeholderNode.hidden = true ;
   
            placeholderNode.parentNodeId = null ;
   
            children.splice(children.indexOf(placeholderNode) , 1) ;
         }
         
      }
   }

   let {
      children,
      expanded,
      id:parentNodeId
   } = findedNode ;

   if(expanded){

      children.push(placeholderNode) ;

      placeholderNode.parentNodeId = parentNodeId ;

      placeholderNode.hidden = false ;

   }

   me.previousFindedNode = findedNode ;

   layout() ;
 
}

 return getData(findedNode) ;