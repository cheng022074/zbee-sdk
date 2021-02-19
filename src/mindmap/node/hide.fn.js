
/**
 * 
 * 显示节点
 * 
 * @import getChildNodes from ..layout.nodes.child scoped
 * 
 * @import hide from .hide scoped
 * 
 * @param {data.Record} node 节点
 * 
 */

let {
    hidden
 } = node ;

 if(hidden){

    return ;
 }

 let childNodes = getChildNodes(node) ;

 for(let childNode of childNodes){

   hide(childNode) ;
 }

node.hidden = true ;