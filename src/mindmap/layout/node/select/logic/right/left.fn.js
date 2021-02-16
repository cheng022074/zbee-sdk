
/**
 * 
 * 向左移动选择节点
 * 
 * @import getParentNode from mindmap.layout.node.parent scoped
 * 
 * @import select from mindmap.node.select scoped
 * 
 */

 let {
    selectedNode
 } = this,
 node = getParentNode(selectedNode) ;

 if(node){

   return select(node) ;
 }

 return false ;