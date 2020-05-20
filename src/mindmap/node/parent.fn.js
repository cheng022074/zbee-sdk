
/**
 * 
 * 获取指定节点的父节点引用
 * 
 * @import isRootNode from .is.root
 * 
 * @import get from .get scoped
 * 
 * @param {data.Record} node 节点
 * 
 * @return {data.Record} 父节点 
 * 
 */

 if(!isRootNode(node)){

    return get(node.parentNodeId) ;
 }

