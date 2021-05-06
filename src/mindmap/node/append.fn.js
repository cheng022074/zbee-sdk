
/**
 * 
 * 添加子节点
 * 
 * @import data from .data scoped
 * 
 * @import show from .show scoped
 * 
 * @import getLastChildNode from .child.last scoped
 * 
 * @import getParentNode from .parent scoped
 * 
 * @import from from .from scoped
 * 
 * @import fireChangeEvent from ..fire.event.change scoped
 * 
 * @param {mixed} node 节点配置
 * 
 * @param {mixed} parentNode 节点
 * 
 * @return {boolean} 添加标识
 * 
 */

 node = from(node) ;

 parentNode = from(parentNode) ;

 let {
   placeholderNode
 } = this ;

if(parentNode === node || getLastChildNode(parentNode) === node || parentNode === placeholderNode){

  return false;

}

if(node.parentNodeId){

  let {
      children
  } = getParentNode(node) ;

  node.parentNodeId = null ;

  node.hidden = true ;

  children.splice(children.indexOf(node) , 1) ;
}

let {
    children,
    hidden,
    expanded
} = parentNode;

children.push(node) ;

node.parentNodeId = parentNode.id ;

if(!hidden && expanded){

  show(node) ;
}

if(node !== placeholderNode){

  this.fireEvent('nodeappend' , data(node) , data(parentNode)) ;

  fireChangeEvent() ;

}

return true ;

