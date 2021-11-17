
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

 console.log('绝对布局' , '结束拖曳节点') ;

 draggingNode.dragging = false ;
 
 return true ;