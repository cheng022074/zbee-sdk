
/**
 * 
 * 删除节点
 * 
 * @import isRootNode from .is.root scoped
 * 
 * @import is from .is.visibility
 * 
 * @import getParentNode from .parent scoped
 * 
 * @import getDescendantNodes from ..nodes.relation.descendant scoped
 * 
 * @import hide from .hide scoped
 * 
 * @param {data.Record} node 节点
 * 
 */

 if(is(node) && !isRootNode(node)){

    let {
        children
    } = getParentNode(node);

    hide(node) ;

    let {
        nodes
    } = this,
    descendantNodes = getDescendantNodes(node , false);

    for(let {
        id
    } of descendantNodes){

        nodes.delete(id) ;
    }

    nodes.delete(node.id) ;

    node.parentNodeId = null ;

    children.splice(children.indexOf(node) , 1) ;
    
 }