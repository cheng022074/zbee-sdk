
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

 let parentNode = getParentNode(node) ;

 if(!isRootNode(node) && parentNode){

    let {
        children
    } = parentNode;

    hide(node) ;

    let descendantNodes = getDescendantNodes(node , false),
        deleteNodes = [];

    for(let node of descendantNodes){

        deleteNodes.push(data(node)) ;
    }

    deleteNodes.push(data(node)) ;

    node.parentNodeId = null ;

    children.splice(children.indexOf(node) , 1) ;

    return deleteNodes ;
    
 }

 return false ;