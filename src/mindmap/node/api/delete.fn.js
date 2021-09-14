
/**
 * 
 * 删除节点
 * 
 * @import isRootNode from ..is.root scoped
 * 
 * @import getParentNode from ..parent scoped
 * 
 * @import getDescendantNodes from ....nodes.descendant scoped
 * 
 * @import hide from ..hide scoped
 * 
 * @import from from ..from scoped
 * 
 * @import adjustSelectedBefore from .adjust.selected.before scoped
 * 
 * @import adjustSelectedAfter from .adjust.selected.after scoped
 * 
 * @param {mixed} node 节点
 * 
 * @return {data.Record} 如果删除成功则返回删除的节点引用，否则返回 false
 */

 node = from(node) ;

 if(node && !isRootNode(node)){
 
     let parentNode = getParentNode(node),
         adjustInfo = adjustSelectedBefore();
 
     hide(node) ;
 
     let nodes = [
         node,
         ...getDescendantNodes(node , false)
     ],
     {
         nodes:originNodes
     } = this;
 
     for(let node of nodes){
 
         node.parentNodeId = null ;
 
         node.children.length = 0 ;
 
         node.hidden = false ;
 
         originNodes.delete(node.id) ;
     }
 
     let {
         children
     } = parentNode;
 
     children.splice(children.indexOf(node) , 1) ;

     adjustSelectedAfter(adjustInfo) ;
 
     return node ;
 
 }
 
 return false ;