
/**
 * 
 * 通过ID获得节点引用
 * 
 * @import from from ..data.node.from scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @return {data.Record} 节点
 * 
 */

 node = from(node) ;

 if(node && !node.hidden){

   return node ;
 }