
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
 * @import remove from .delete scoped
 * 
 * @param {data.Record} node 节点
 * 
 * @param {boolean} [keepSelf = false] 删除时是否仅删除指节点的所有子节点，如果是则指定 true , 否则指定 false
 * 
 */

 let parentNode = getParentNode(node) ;

 if(!isRootNode(node) && parentNode){

    if(keepSelf){

        let {
            children
        } = node ;

        children = Array.from(children) ;

        let deleteNodes = [] ;

        for(let childNode of children){

            deleteNodes.push(...remove(childNode)) ;
        }

        return deleteNodes ;

    }

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