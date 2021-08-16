
/**
 * 
 * 获取指定节点的父节点引用
 * 
 * @import from from .from scoped
 * 
 * @param {data.Record} node 节点
 * 
 * @return {data.Record} 父节点 
 * 
 */

 let {
   nodes
 } = this,
 {
  parentNodeId
 } = from(node) ;

 if(parentNodeId){

   return nodes.get(parentNodeId) ;

 }

