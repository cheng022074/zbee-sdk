
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
 * @param {data.Record} parentNode 节点
 * 
 * @param {mixed} node 节点配置
 * 
 * 
 */

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

