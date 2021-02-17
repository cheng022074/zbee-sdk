
/**
 * 
 * 删除节点
 * 
 * @import isRootNode from .is.root scoped
 * 
 * @import getParentNode from .parent scoped
 * 
 * @import data from ..layout.node.data.param scoped
 * 
 * @import getDescendantNodes from ..nodes.descendant scoped
 * 
 * @import hide from .hide scoped
 * 
 * @import getChildOrders from .child.orders scoped
 * 
 * @param {mixed} node 节点
 * 
 * @return {boolean} 删除标识
 */

node = from(node) ;

let parentNode = getParentNode(node) ;

if(!isRootNode(node)){

   hide(node) ;

   let nodes = [
       node,
       ...getDescendantNodes(node)
   ] ;

   for(let node of nodes){

       node.parentNodeId = null ;

       node.children.length = 0 ;
   }

    let {
        children
    } = parentNode;

   children.splice(children.indexOf(node) , 1) ;

   me.fireEvent('nodedelete' , data(node) , getChildOrders(parentNode)) ;

   return true ;
}

return false ;