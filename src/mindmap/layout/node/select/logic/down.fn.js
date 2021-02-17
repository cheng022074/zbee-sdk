
/**
 * 
 * 向下移动选择节点
 * 
 * @import next from mindmap.layout.node.sibling.next scoped
 * 
 * @import select from mindmap.node.select scoped
 * 
 */

let {
   selectedNode,
   layoutPositioner
 } = this ;

let node = next(selectedNode) || layoutPositioner.getDownNode(selectedNode);

if(node){

   return select(node) ;

}

return false ;