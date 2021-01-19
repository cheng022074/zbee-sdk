
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
 * @import from from .from scoped
 * 
 * @import getLastChildNode from ..data.node.child.last scoped
 * 
 * @param {mixed} node 节点配置
 * 
 * @param {mixed} parentNode 节点
 * 
 */

parentNode = from(parentNode) ;

let mindmapNode = from(node) ;

if(mindmapNode && (parentNode === mindmapNode || getLastChildNode(parentNode) === mindmapNode)){

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

