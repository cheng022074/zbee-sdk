
/**
 * 
 * 删除节点
 * 
 * @import getPreviousNode from .sibling.previous scoped
 * 
 * @import data from .data scoped
 * 
 * @import from from .from scoped
 * 
 * @import fireChangeEvent from ..fire.event.change scoped
 * 
 * @import remove from .sync.delete scoped
 * 
 * @param {mixed} node 节点
 * 
 * @return {boolean} 删除标识
 */

function main(node){

    let deletedNode = from(node),
        removeNodeTree,
        oldPositionInfo ;

    if(deletedNode){

        removeNodeTree = snapshot(node),
        oldPositionInfo = {
            parentNodeId:node.parentNodeId
        },
        previousNode = getPreviousNode(node);

        if(previousNode){

            oldPositionInfo.previousNodeId = previousNode.id ;
        }

        remove(node);

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
    dataChildNodes = [],
    dataNode = data(node);

    for(let childNode of children){

        dataChildNodes.push(snapshot(childNode)) ;
    }

    dataNode.children = dataChildNodes ;

    return dataNode ;
}