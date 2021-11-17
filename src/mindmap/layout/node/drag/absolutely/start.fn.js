
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
 */

 let me = this,
 {
    draggingNode
 } = me;

 if(draggingNode){

    return false;
 }

 console.log('绝对布局' , '开始拖曳节点') ;

 node = from(node) ;

 select(node) ;

 me.draggingNode = node ;

 node.dragging = true ;

 return true ;