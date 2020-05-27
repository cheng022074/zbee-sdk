
/**
 * 
 * 插入成为第一个子节点
 * 
 * @import getFirstChildNode from ..child.first scoped
 * 
 * @import insert from .before scoped
 * 
 * @import append from ..append scoped
 * 
 * @param {data.Record} parentNode 父节点
 * 
 * @param {mixed} node 插入节点配置
 * 
 */

 let {
    children
 } = parentNode,
 firstChildNode = getFirstChildNode(parentNode);

 if(!firstChildNode){

    append(parentNode , node) ;
 
 }else{

    insert(node , firstChildNode) ;
 }