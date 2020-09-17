
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
 * @import from from ..data.node.from scoped
 * 
 * @param {mixed} node 节点信息
 * 
 * @param {mixed} [parentNode] 父节点
 * 
 * @return {data.Record} 创建出来的新节点 
 * 
 */

parentNode = from(parentNode) ;

let {
   reader,
   nodes
} = this ;

if(is(node)){

   removeNode(node) ;

   if(parentNode){

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

let options = {
   id:generate('node-'),
   ...node,
   children:[]
} ;

if(parentNode){

   options.parentNodeId = parentNode.id ;
}

node = reader.create(options) ;

nodes.set(node.id , node) ;

return node ;





