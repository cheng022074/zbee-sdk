
/**
 * 
 * 删除节点
 * 
 * @import isRootNode from ..is.root scoped
 * 
 * @import getParentNode from ..parent scoped
 * 
 * @import getPreviousNode from ..sibling.previous scoped
 * 
 * @import getNextNode from ..sibling.next scoped
 * 
 * @import getDescendantNodes from ....nodes.descendant scoped
 * 
 * @import hide from ..hide scoped
 * 
 * @import from from ..from scoped
 * 
 * @import select from ..select scoped
 * 
 * @param {mixed} node 节点
 * 
 * @return {data.Record} 如果删除成功则返回删除的节点引用，否则返回 false
 */

node = from(node) ;

if(node && !isRootNode(node)){

    let parentNode = getParentNode(node),
    {
        rootNode,
        selectedNode
    } = this,
    selectedNodeParentNode = getParentNode(selectedNode),
    selectedNodePreviousNode = getPreviousNode(node),
    selectedNodeNextNode = getNextNode(node);

    hide(node) ;

    let nodes = [
        node,
        ...getDescendantNodes(node)
    ],
    {
        nodes:originNodes
    } = this;

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

    if(!from(selectedNode)){

        selectedNodeParentNode = from(selectedNodeParentNode) ;

        if(selectedNodeParentNode){

            select(selectedNodePreviousNode || selectedNodeNextNode || selectedNodeParentNode) ;
        
        }else{

            select(rootNode) ;
        }
    
    }

    return node ;

}

return false ;