
/**
 * 
 * 添加子节点
 * 
 * @import data from ..layout.node.data.param scoped
 * 
 * @import show from .show scoped
 * 
 * @import getLastChildNode from .child.last scoped
 * 
 * @param {data.Record} node 节点配置
 * 
 * @param {data.Record} parentNode 节点
 * 
 */

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

me.fireEvent('nodeappend' , data(node) , data(parentNode)) ;

return true ;

