
/**
 * 
 * 创建新节点
 * 
 * @import generate from id.generate
 * 
 * @import is from is.data.record
 * 
 * @import isVisibilityNode from .is.node.visibility
 * 
 * @import remove from .delete scoped
 * 
 * @param {mixed} node 节点信息
 * 
 * @param {data.Record} parentNode 父节点
 * 
 * @return {data.Record} 创建出来的新节点 
 * 
 */

 let {
    reader
 } = this ;

 if(is(node)){

   if(isVisibilityNode(node)){

      remove(node) ;
   }

   node.parentNodeId = parentNode.id ;

   return node ;
 }

 node = reader.create({
    ...node,
    id:generate('node-'),
    children:[],
    parentNodeId:parentNode.id,
    selected:true
}) ;

node.hidden = false ;

return node ;





