
/**
 * 
 * 开始拖曳节点
 * 
 *  @import select from mindmap.node.select scoped
 * 
 * @param {mixed} node 节点
 * 
 */

 let me = this,
 {
    draggingNode
 } = me;

 if(draggingNode){

    return false;
 }

 node = from(node) ;

 select(node) ;

 me.draggingNode = node ;

 node.dragging = true ;

 return true ;