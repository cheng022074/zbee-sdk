
/**
 * 
 * 根据所提供的标识来获得脑图节点
 * 
 * @import is.defined
 * 
 * @import from from ..data.node.from scoped
 * 
 * @param {mixed} node 脑图节点标识
 * 
 * @return {data.Record} 脑图节点 
 * 
 */

 if(isDefined(node)){

    return from(node) ;
 }

 return this.selectedNode ;