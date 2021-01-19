
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
 * @import getNextSibling from ..sibling.next scoped
 * 
 * @import doOrder from ....order scoped
 * 
 * @param {function} [beforeMoveFn = () => true] 拖曳的拦截函数 
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
       position,
       siblingNode;

   if(siblingNode = getPreviousSibling(placeholderNode)){

      position = 'after' ;
   
   }else if(siblingNode = getNextSibling(placeholderNode)){

      position = 'before' ;
   
   }else{

      position = 'append' ;
   }

   if(beforeMoveFn(position , data(getParentNode(placeholderNode)) , data(selectedNode) , siblingNode) !== false){

      let {
         selected
      } = selectedNode ;

      insertBefore(selectedNode , placeholderNode) ;

      selectedNode.selected = selected ;
   }

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
 