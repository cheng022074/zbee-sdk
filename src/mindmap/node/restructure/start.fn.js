
/**
 * 
 * 开始重组节点
 * 
 * @import getDescendantNodes from ....nodes.relation.descendant
 * 
 * @import fireDrawEvent from ....fire.draw scoped
 * 
 * 
 */

 let me = this,
 {
    selectedNode
 } = me;

 selectedNode.restructuring = true ;

 let nodes = getDescendantNodes(selectedNode) ;

 for(let node of nodes){

   node.restructuring = true ;
 }

 fireDrawEvent() ;