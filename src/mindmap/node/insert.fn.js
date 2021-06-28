
/**
 * 
 * 插入节点
 * 
 * @import data from .data scoped
 * 
 * @import isRootNode from .is.root scoped
 * 
 * @import getParentNode from .parent scoped
 * 
 * @import getPreviousNode from .sibling.previous scoped
 * 
 * @import getNextNode from .sibling.next scoped
 * 
 * @import show from .show scoped
 * 
 * @import from from .from scoped
 * 
 * @import fireChangeEvent from ..fire.event.change scoped
 * 
 * @param {mixed} insertNode 需要插入的节点
 * 
 * @param {mixed} baseNode 参照节点
 * 
 * @param {string} region 插入偏移位置
 * 
 * @return {boolea} 插入状态标识
 * 
 */

 insertNode = from(insertNode) ;

 baseNode = from(baseNode) ;

 let {
    placeholderNode
 } = this ;

if(!isRootNode(baseNode) && baseNode !== placeholderNode){

    if(insertNode){

        if(insertNode === baseNode){

            return false;
        }

        switch(region){

            case 'before':

                if(getPreviousNode(baseNode) === insertNode){

                    return false;
                }

                break;

            case 'after':

                if(getNextNode(baseNode) === insertNode){

                    return false;
                }
        }
    }

    let oldPositionInfo,
    {
        parentNodeId
    } = insertNode;

    if(parentNodeId){

        oldPositionInfo = {
            parentNodeId
        } ;

        let previousNode = getPreviousNode(node) ;

        if(previousNode){

            oldPositionInfo.previousNodeId = previousNode.id ;
        }

        let {
            children
        } = getParentNode(insertNode) ;

        insertNode.parentNodeId = null ;

        insertNode.hidden = true ;

        children.splice(children.indexOf(insertNode) , 1) ;
    }

    let parentNode = getParentNode(baseNode),
    {
        children
    } = parentNode,
    {
        length
    } = children;

    let index = children.indexOf(baseNode) ;

    if(region === 'after'){

        index ++ ;
    }

    if(index > length - 1){

        index = length ;
    
    }

    children.splice(index , 0 , insertNode) ;

    insertNode.parentNodeId = parentNode.id ;

    if(!baseNode.hidden){

        show(insertNode) ;
    }

    if(insertNode !== placeholderNode){

        let dataNode = data(insertNode),
            dataBaseNode = data(baseNode),
            dataParentNode = data(parentNode);

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

    return true ;
}

return false ;