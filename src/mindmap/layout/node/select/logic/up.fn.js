
/**
 * 
 * 向上移动选择节点
 * 
 * @import previous from mindmap.layout.node.sibling.previous scoped
 * 
 * @import select from mindmap.node.select scoped
 * 
 */

 let {
   selectedNode,
   layoutPositioner
 } = this ;

let node = previous(selectedNode) || layoutPositioner.getUpNode(selectedNode);

if(node){

   return select(node) ;
 
}

return false ;