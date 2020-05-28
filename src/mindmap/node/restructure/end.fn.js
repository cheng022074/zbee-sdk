
/**
 * 
 * 结束重组节点
 * 
 * @import getDescendantNodes from ....nodes.relation.descendant
 * 
 * @import fireDrawEvent from ....fire.draw scoped
 * 
 * @import getParentNode from ..parent scoped
 * 
 */

let me = this,
{
   selectedNode,
   restructureIndicatedNode,
   placeholderNode
} = me;

restructureIndicatedNode.indicated = false ;

delete me.restructureIndicatedNode ;

delete me.restructuring ;

let {
   parentNodeId
} = placeholderNode ;

if(parentNodeId){

   let {
       children
   } = getParentNode(placeholderNode) ;

   placeholderNode.hidden = true ;

   placeholderNode.parentNodeId = null ;

   children.splice(children.indexOf(placeholderNode) , 1) ;
}

selectedNode.restructuring = false ;

let nodes = getDescendantNodes(selectedNode) ;

for(let node of nodes){

   node.restructuring = false ;
 }

fireDrawEvent() ;