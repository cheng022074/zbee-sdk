
/**
 * 
 * 重置节点
 * 
 * @import reset from .reset scoped
 * 
 * @import getParentNode from ..node.parent scoped
 * 
 * @param {data.Record} node 节点
 * 
 */

if(node){

    delete node.leafNodes ;

    delete node.relationNodes ;

    delete node.firstChildNodes ;

    delete node.lastChildNodes ;

    reset(getParentNode(node)) ;
}

