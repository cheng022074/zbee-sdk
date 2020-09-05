
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
 * @import getPreviousSibling from ..sibling.previous scoped
 * 
 * @import doOrder from ....order scoped
 * 
 */

let me = this,
{
   restructuredNode:selectedNode,
   restructureIndicatedNode,
   placeholderNode
} = me;

if(!selectedNode){

   return ;
}

if(restructureIndicatedNode){

   restructureIndicatedNode.indicated = false ;

   delete me.restructureIndicatedNode ;
}

let fireEvent;

if(is(placeholderNode)){

   let oldPreviousSibling = getPreviousSibling(selectedNode),
       oldParentNode = getParentNode(selectedNode),
       {
          selected
       } = selectedNode;

   insertBefore(selectedNode , placeholderNode) ;

   selectedNode.selected = selected ;

   remove(placeholderNode) ;

   let parentNode = getParentNode(selectedNode);

   if(!(oldParentNode === parentNode && oldPreviousSibling === getPreviousSibling(selectedNode))){

      fireEvent = () => {

         me.fireEvent('nodemove' , data(selectedNode) , data(parentNode) , oldParentNode) ;

         doOrder(parentNode) ;

      } ;
   }
}

delete me.restructuring ;

delete me.restructuredNode ;

selectedNode.restructuring = false ;

let nodes = getDescendantNodes(selectedNode) ;

for(let node of nodes){

   node.restructuring = false ;
}

if(fireEvent){

   fireEvent() ;

}

me.layout() ;
 