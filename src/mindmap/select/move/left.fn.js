
/**
 * 
 * 向左移动选择节点
 * 
 * @import getParentNode from ....node.parent scoped
 * 
 * @import select from ....select scoped
 * 
 */

 let {
    selectedNode
 } = this,
 node = getParentNode(selectedNode) ;

 if(node){

   return await select(node.id) ;
 }

 return false ;