
/**
 * 
 * 开始重组节点
 * 
 * @import getDescendantNodes from ....nodes.descendant scoped
 * 
 * @import isRootNode from ..is.root scoped
 * 
 * @import from from mindmap.node.from scoped
 * 
 * @import select from mindmap.node.select scoped
 * 
 * @param {mixed} node 节点
 * 
 */

 node = from(node) ;

 select(node) ;

 if(isRootNode(node)){

    return false;
 }

 let me = this ;

 me.draggingNode = node ;

 node.dragging = true ;

 let nodes = getDescendantNodes(node) ;

 for(let node of nodes){

    node.dragging = true ;

 }

 return true ;


