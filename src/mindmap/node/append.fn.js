
/**
 * 
 * 添加子节点
 * 
 * @import generate from id.generate
 * 
 * @import create from .create scoped
 * 
 * @import show from .show scoped
 * 
 * @import from from ..data.node.from scoped
 * 
 * @import getLastChildNode from ..data.node.child.last scoped
 * 
 * @param {mixed} parentNode 节点
 * 
 * @param {mixed} node 节点配置
 * 
 * 
 */

parentNode = from(parentNode) ;

if(parentNode){
  
  node = from(node) ;

  if(node && getLastChildNode(parentNode) === node){

    return ;

  }

  let {
      children,
      hidden,
      expanded
  } = parentNode;

  node = create(node , parentNode) ;
  
  children.push(node) ;

  if(!hidden && expanded){

    show(node) ;
  }

  return node ;
}

