
/**
 * 
 * 向下移动选择节点
 * 
 * @import next from ....node.sibling.next scoped
 * 
 * @import select from ....select scoped
 * 
 */

 let me = this,
 {
    selectedNode
 } = me,
 node = next(selectedNode) ;

 if(node){

    return await select(node.id) ;

 }else{

   let {
      visibilityNodes
   } = me ;

   let node = visibilityNodes.getNearestNode(selectedNode , 'down') ;

   if(node){

      return await select(node.id) ;
   }
}

return false ;