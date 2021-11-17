
/**
 * 
 * 结束拖曳节点
 * 
 */

 let me = this,
 {
    draggingNode
 } = me;
 
 delete me.draggingNode ;

 delete me.draggingOffsetXY ;

 draggingNode.dragging = false ;
 
 return true ;