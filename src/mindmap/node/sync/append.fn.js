
/**
 * 
 * 添加子节点
 * 
 * @import show from .show scoped
 * 
 * @import getLastChildNode from .child.last scoped
 * 
 * @import getParentNode from .parent scoped
 * 
 * @import from from .from scoped
 * 
 * @param {mixed} node 节点配置
 * 
 * @param {mixed} parentNode 节点
 * 
 * @return {boolean} 添加子节点成功则返回 true , 否则返回 false
 * 
 */

 node = from(node) ;

 parentNode = from(parentNode) ;

 let me = this,
 {
   placeholderNode
 } = me ;

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

return true ;

