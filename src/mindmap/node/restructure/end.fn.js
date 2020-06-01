
/**
 * 
 * 结束重组节点
 * 
 * @import getDescendantNodes from ....nodes.relation.descendant
 * 
 * @import layout from ....layout scoped
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

restructureIndicatedNode.indicated = false ;

if(is(placeholderNode)){

   insertBefore(selectedNode , placeholderNode) ;

   show(selectedNode) ;

   remove(placeholderNode) ;

   selectedNode.selected = true ;
}

delete me.restructureIndicatedNode ;

delete me.restructuring ;

selectedNode.restructuring = false ;

let nodes = getDescendantNodes(selectedNode) ;

for(let node of nodes){

   node.restructuring = false ;
}

 layout() ;