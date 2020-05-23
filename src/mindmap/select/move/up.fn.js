
/**
 * 
 * 向上移动选择节点
 * 
 * @import previous from ....node.sibling.previous scoped
 * 
 * @import select from ....select scoped
 * 
 */

let {
    selectedNode
 } = this,
 node = previous(selectedNode) ;

 if(node){

    select(node.id) ;
 }