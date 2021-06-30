
/**
 * 
 * 插入节点
 * 
 * @import data from .data scoped
 * 
 * @import getPreviousNode from .sibling.previous scoped
 * 
 * @import from from .from scoped
 * 
 * @import fireChangeEvent from ..fire.event.change scoped
 * 
 * @import getParentNode from .parent scoped
 * 
 * @import insert from .sync.insert scoped
 * 
 * @param {mixed} node 需要插入的节点
 * 
 * @param {mixed} baseNode 参照节点
 * 
 * @param {string} region 插入偏移位置
 * 
 * @return {boolea} 插入状态标识
 * 
 */

 let insertNode = from(node),
    oldPositionInfo ;

if(insertNode){

    let {
        parentNodeId
    } = insertNode;

    if(parentNodeId){

        oldPositionInfo = {
            parentNodeId
        } ;

        let previousNode = getPreviousNode(insertNode) ;

        if(previousNode){

            oldPositionInfo.previousNodeId = previousNode.id ;
        }
    }

}

if(insertNode = insert(node , baseNode , region)){

    let me = this,
    {
        placeholderNode
    } = me ;

    if(insertNode !== placeholderNode){

        let dataNode = data(insertNode),
            dataBaseNode = data(baseNode),
            dataParentNode = data(getParentNode(insertNode));

        this.fireEvent(`nodeinsert${region}` , dataNode , dataBaseNode , dataParentNode) ;

        let previousNode = getPreviousNode(insertNode),
            positionInfo = {
                parentNodeId:dataParentNode.id
            };
    
        if(previousNode){
    
            positionInfo.previousNodeId = previousNode.id ;
        }

        fireChangeEvent({
            operation:oldPositionInfo ? 'move' : 'create',
            node:dataNode,
            positionInfo,
            oldPositionInfo
        }) ;
    }

    return insertNode ;
}

return false ;