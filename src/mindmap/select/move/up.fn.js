
/**
 * 
 * 向上移动选择节点
 * 
 * @import previous from ....node.sibling.previous scoped
 * 
 * @import select from ....select scoped
 * 
 */

let me = this,
{
    selectedNode
 } = me,
 node = previous(selectedNode) ;

 if(node){

    select(node.id) ;
 
}else{

   let {
      visibilityNodes
   } = me ;

   let node = visibilityNodes.getNearestNode(selectedNode , 'up') ;

   if(node){

      select(node.id) ;
   }
}