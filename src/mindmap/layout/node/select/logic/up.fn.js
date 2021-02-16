
/**
 * 
 * 向上移动选择节点
 * 
 * @import previous from mindmap.layout.node.sibling.previous scoped
 * 
 * @import select from mindmap.node.select scoped
 * 
 */

let node = previous(this.selectedNode) ;

if(node){

   return select(node) ;
 
}

return false ;