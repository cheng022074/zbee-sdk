
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
 * @import remove from .api.delete scoped
 * 
 * @param {mixed} node 节点
 * 
 * @return {boolean} 删除标识
 */

function main(node){

    let deletedNode = from(node) ;

    if(deletedNode && deletedNode.deletable){

        let removeNodeTree = snapshot(deletedNode),
        oldPositionInfo = {
            parentNodeId:node.parentNodeId
        },previousNode = getPreviousNode(deletedNode);

        if(previousNode){

            oldPositionInfo.previousNodeId = previousNode.id ;
        }

        remove(deletedNode);

        let dataNode = data(deletedNode) ;

        this.fireEvent('nodedelete' , dataNode) ;

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