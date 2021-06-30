
/**
 * 
 * 创建新节点
 * 
 * @import generate from .id.generate scoped
 * 
 * @import is.string
 * 
 * @param {object} [node = {}] 节点信息
 * 
 * @return {data.Record} 创建出来的新节点 
 * 
 */

if(isString(node)){

   node = {
      id:node
   } ;
}

let {
   reader,
   nodes
} = this,
{
   fields
} = reader;

for(let {
   name,
   local
} of fields){

   if(local){

      delete node[name] ;
   }
}

let options = {
   id:generate(),
   ...node,
   children:[]
} ;

node = reader.create(options) ;

nodes.set(node.id , node) ;

return node ;