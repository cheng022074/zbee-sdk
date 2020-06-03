
/**
 * 
 * 创建新节点
 * 
 * @import generate from id.generate
 * 
 * @import is from is.data.record
 * 
 * @import isVisibilityNode from .is.visibility
 * 
 * @import removeNode from .delete scoped
 * 
 * @import remove from array.remove
 * 
 * @import get from .get scoped
 * 
 * @import create from .create scoped
 * 
 * @param {mixed} node 节点信息
 * 
 * @param {data.Record} parentNode 父节点
 * 
 * @return {data.Record} 创建出来的新节点 
 * 
 */

let {
   reader,
   nodes
} = this ;

if(is(node)){

   if(node.parentNodeId === parentNode.id){

      remove(parentNode.children , node) ;
   
   }else{

      removeNode(node) ;

      node.parentNodeId = parentNode.id ;
   }

   return node ;
}

let {
   id
} = node,
existNode = get(id);

if(existNode){

   return create(existNode , parentNode) ;
}

node = reader.create({
   id:generate('node-'),
   ...node,
   children:[],
   parentNodeId:parentNode.id
}) ;

nodes.set(node.id , node) ;

return node ;





