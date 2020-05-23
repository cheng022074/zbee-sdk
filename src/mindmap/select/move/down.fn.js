
/**
 * 
 * 向下移动选择节点
 * 
 * @import next from ....node.sibling.next scoped
 * 
 * @import select from ....select scoped
 * 
 */

 let {
    selectedNode
 } = this,
 node = next(selectedNode) ;

 if(node){

    select(node.id) ;
 }