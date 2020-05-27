
/**
 * 
 * 结束重组节点
 * 
 * @import getDescendantNodes from ....nodes.relation.descendant
 * 
 * @import fireDrawEvent from ....fire.draw scoped
 * 
 */

let me = this,
{
   selectedNode,
   restructureIndicatedNode
} = me;

restructureIndicatedNode.indicated = false ;

delete me.restructureIndicatedNode ;

delete me.restructuring ;

selectedNode.restructuring = false ;

let nodes = getDescendantNodes(selectedNode) ;

for(let node of nodes){

   node.restructuring = false ;
 }

fireDrawEvent() ;