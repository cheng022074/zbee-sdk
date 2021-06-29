
/**
 * 
 * 删除节点
 * 
 * @import isRootNode from .is.root scoped
 * 
 * @import getParentNode from .parent scoped
 * 
 * @import getPreviousNode from .sibling.previous scoped
 * 
 * @import getNextNode from .sibling.next scoped
 * 
 * @import getDescendantNodes from ..nodes.descendant scoped
 * 
 * @import hide from .hide scoped
 * 
 * @import from from .from scoped
 * 
 * @import select from .select scoped
 * 
 * @param {mixed} node 节点
 * 
 * @return {boolean} 删除标识
 */

node = from(node) ;

let parentNode = getParentNode(node) ;

if(!isRootNode(node)){

    select(getPreviousNode(node) || getNextNode(node) || parentNode) ;

    hide(node) ;

    let nodes = [
        node,
        ...getDescendantNodes(node)
    ],
    me = this,
    {
        nodes:originNodes
    } = me;

    for(let node of nodes){

        node.parentNodeId = null ;

        node.children.length = 0 ;

        node.hidden = false ;

        node.selected = false ;

        originNodes.delete(node.id) ;
    }

    let {
        children
    } = parentNode;

    children.splice(children.indexOf(node) , 1) ;

    return true ;

}

return false ;