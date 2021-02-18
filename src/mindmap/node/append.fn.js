
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
 * @import getChildOrders from .child.orders scoped
 * 
 * @import from from .from scoped
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

if((parentNode === node || getLastChildNode(parentNode) === node)){

  return false;

}

let {
    children,
    hidden,
    expanded
} = parentNode;

children.push(node) ;

if(!hidden && expanded){

  show(node) ;
}

me.fireEvent('nodeappend' , data(node) , data(parentNode) , getChildOrders(parentNode)) ;

return true ;

