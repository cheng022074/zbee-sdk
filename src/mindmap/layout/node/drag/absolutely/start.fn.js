
/**
 * 
 * 开始拖曳节点
 * 
 * @import from from mindmap.node.from scoped
 * 
 * @import select from mindmap.node.select scoped
 * 
 * @param {mixed} node 节点
 * 
 * @param {object} xy 起始坐标
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

 me.draggingOffsetXY = xy ;

 node.dragging = true ;

 return true ;