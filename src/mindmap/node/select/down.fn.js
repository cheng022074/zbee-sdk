
/**
 * 
 * 向下移动选择节点
 * 
 * @import next from ....layout.node.sibling.next scoped
 * 
 * @import select from ..select scoped
 * 
 */

let node = next(this.selectedNode) ;

if(node){

   return select(node) ;

}

return false ;