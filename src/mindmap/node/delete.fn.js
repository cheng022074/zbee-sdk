
/**
 * 
 * 删除节点
 * 
 * @import isRootNode from .is.root scoped
 * 
 * @import getParentNode from .parent scoped
 * 
 * @import hide from .hide scoped
 * 
 * @param {data.Record} node 节点
 * 
 */

 if(!isRootNode(node)){

    let {
        children
    } = getParentNode(node);

    hide(node) ;

    node.parentNodeId = null ;

    children.splice(children.indexOf(node) , 1) ;   
 }