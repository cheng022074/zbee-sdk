
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

let fireEvent ;

restructureIndicatedNode.indicated = false ;

if(is(placeholderNode)){

   let oldParentNode = getParentNode(selectedNode) ;

   if(insertBefore(selectedNode , placeholderNode)){

      fireEvent = () => {

         let parentNode = getParentNode(selectedNode) ;

         me.fireEvent('nodemove' , data(selectedNode) , data(parentNode) , data(oldParentNode)) ;
   
         doOrder(parentNode) ;
      } ;

   }

   remove(placeholderNode) ;
}

delete me.restructureIndicatedNode ;

delete me.restructuring ;

selectedNode.restructuring = false ;

let nodes = getDescendantNodes(selectedNode) ;

for(let node of nodes){

   node.restructuring = false ;
}

if(fireEvent){

   layout() ;

   fireEvent() ;

}else{

   fireDrawEvent() ;
}

 