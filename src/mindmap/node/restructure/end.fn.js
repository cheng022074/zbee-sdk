
/**
 * 
 * 结束重组节点
 * 
 * @import getDescendantNodes from ....nodes.relation.descendant
 * 
 * @import layout from ....layout scoped
 * 
 * @import fireDrawEvent from ....fire.draw scoped
 * 
 * @import getParentNode from ..parent scoped
 * 
 * @import remove from ..delete scoped
 * 
 * @import insertBefore from ..insert.before scoped
 * 
 * @import show from ..show scoped
 * 
 * @import is from ..is.visibility
 * 
 * @import data from ..data scoped
 * 
 * @import doOrder from ....order scoped
 * 
 */

let me = this,
{
   selectedNode,
   restructureIndicatedNode,
   placeholderNode
} = me;

if(!restructureIndicatedNode){

   return ;
}

let {
   order:oldOrder,
   parentNodeId:oldParentNodeId
} = selectedNode ;

restructureIndicatedNode.indicated = false ;

if(is(placeholderNode)){

   insertBefore(selectedNode , placeholderNode) ;

   show(selectedNode) ;

   remove(placeholderNode) ;

   selectedNode.selected = true ;

   doOrder(getParentNode(selectedNode)) ;
}

delete me.restructureIndicatedNode ;

delete me.restructuring ;

selectedNode.restructuring = false ;

let nodes = getDescendantNodes(selectedNode) ;

for(let node of nodes){

   node.restructuring = false ;
}

let {
   order,
   parentNodeId
} = selectedNode ;

if(order !== oldOrder || parentNodeId !== oldParentNodeId){

   layout() ;

   me.fireEvent('nodemove' , data(selectedNode) , data(getParentNode(selectedNode))) ;

}else{

   fireDrawEvent() ;
}

 