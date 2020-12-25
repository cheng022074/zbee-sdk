
/**
 * 
 * 获取指定节点的父节点引用
 * 
 * @import from from .from scoped
 * 
 * @param {mixed} node 节点
 * 
 * @return {data.Record} 父节点 
 * 
 */

 node = from(node) ;

 if(node){

    let {
       parentNodeId
    } = node ;

    if(parentNodeId){

      return from(parentNodeId) ;
    }
 }