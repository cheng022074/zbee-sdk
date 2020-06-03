
/**
 * 
 * 删除节点
 * 
 * @import isRootNode from .is.root scoped
 * 
 * @import getParentNode from .parent scoped
 * 
 * @import data from .data scoped
 * 
 * @import getDescendantNodes from ..nodes.relation.descendant scoped
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

    let {
        nodes
    } = this,
    descendantNodes = getDescendantNodes(node , false),
    deleteNodes = [];

    for(let node of descendantNodes){

        let {
            id
        } = node ;

        deleteNodes.push(data(node)) ;

        nodes.delete(id) ;
    }

    deleteNodes.push(data(node)) ;

    nodes.delete(node.id) ;

    node.parentNodeId = null ;

    children.splice(children.indexOf(node) , 1) ;

    return deleteNodes ;
    
 }

 return false ;