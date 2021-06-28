
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

    let isCreate = true ;

    if(insertNode.parentNodeId){

        isCreate = false ;

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

        let operation = isCreate ? 'create' : 'move' ;

        if(region === 'after'){

            fireChangeEvent(operation , dataNode , dataParentNode.id ,  dataBaseNode.id) ;
        
        }else{

            let previousNode = getPreviousNode(node) ;

            fireChangeEvent(operation , dataNode , dataParentNode.id ,  previousNode ? previousNode.id : undefined) ;
        }
    }

    return true ;
}

return false ;