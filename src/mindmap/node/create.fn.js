
/**
 * 
 * 创建新节点
 * 
 * @import generate from .id.generate scoped
 * 
 * @param {object} [node = {}] 节点信息
 * 
 * @return {data.Record} 创建出来的新节点 
 * 
 */

let {
   reader,
   nodes
} = this ;

delete node.hidden ;

delete node.level ;

let options = {
   ...node,
   id:generate(),
   children:[]
} ;

node = reader.create(options) ;

nodes.set(node.id , node) ;

return node ;