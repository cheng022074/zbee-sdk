
/**
 * 
 * 添加子节点
 * 
 * @import create from .create scoped
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
 * @return {data.Record} 如果添加成功则返回添加的节点引用，否则返回 false
 * 
 */

 node = from(node) || create(node);

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

return node ;

