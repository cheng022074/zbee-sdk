
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
 * @import data from .data scoped
 * 
 * @import getDescendantNodes from ..nodes.descendant scoped
 * 
 * @import hide from .hide scoped
 * 
 * @import from from .from scoped
 * 
 * @import select from .select scoped
 * 
 * @import fireChangeEvent from ..fire.event.change scoped
 * 
 * @param {mixed} node 节点
 * 
 * @return {boolean} 删除标识
 */

function main(node){

    node = from(node) ;

    let parentNode = getParentNode(node) ;

    if(!isRootNode(node)){

        select(getPreviousNode(node) || getNextNode(node) || parentNode) ;

        let removeNodeTree = snapshot(node),
            oldPositionInfo = {
                parentNodeId:node.parentNodeId
            },
            previousNode = getPreviousNode(node);

        if(previousNode){

            oldPositionInfo.previousNodeId = previousNode.id ;
        }

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

        let dataNode = data(node) ;

        me.fireEvent('nodedelete' , dataNode) ;

        fireChangeEvent({
            operation:'remove',
            node:removeNodeTree,
            oldPositionInfo
        }) ;

        return true ;
    
    }

    return false ;
}

function snapshot(node){

    let {
        children
    } = node,
    dataChildNodes = [];

    for(let childNode of children){

        let dataChildNode = data(childNode) ;

        dataChildNode.children = snapshot(childNode) ;

        dataChildNodes.push(dataChildNode) ;
    }

    return dataChildNodes ;
}