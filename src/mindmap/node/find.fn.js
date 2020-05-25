
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
    previousFindedNode
 } = me,
 findedNode = visibilityNodes.getNearestParentNode(xy);

 if(!previousFindedNode || previousFindedNode.id !== findedNode.id){

   let {
      children,
      expanded,
      id:parentNodeId
   } = findedNode ;

   if(expanded){

      let id = Date.now();

      children.push({
         f_id:id,
         f_title:'预加载节点',
         f_pid:parentNodeId
      }) ;

      let node = children[children.length - 1] ;

      node.width = 100 ;

      node.height = 100 ;

      node.placeholder = true ;

      node.hidden = false ;
   
   }

   if(previousFindedNode){

      let {
         children,
         expanded
      } = previousFindedNode ;

      if(expanded){

         let node = children[children.length - 1] ;

         node.hidden = true ;
   
         children.splice(children.indexOf(node) , 1) ;
      }
   }

   me.previousFindedNode = findedNode ;

   layout() ;
 
}

 return getData(findedNode) ;