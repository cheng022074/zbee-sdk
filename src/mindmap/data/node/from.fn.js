
/**
 * 
 * 根据所提供的标识来获得脑图节点
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import from from .from scoped
 * 
 * @param {mixed} node 脑图节点标识
 * 
 * @return {data.Record} 脑图节点 
 * 
 */

 let {
    nodes,
    selectedNode
 } = this ;

if(isString(node)){

    return nodes.get(node) ;

}else if(isObject(node)){

   let {
       id
   } = node ;

   return from(id) ;
}

return selectedNode ;

