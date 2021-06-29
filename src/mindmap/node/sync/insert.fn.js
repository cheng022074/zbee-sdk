
/**
 * 
 * 插入节点
 * 
 * @import create from ..create scoped
 * 
 * @import isRootNode from ..is.root scoped
 * 
 * @import getParentNode from ..parent scoped
 * 
 * @import getPreviousNode from ..sibling.previous scoped
 * 
 * @import getNextNode from ..sibling.next scoped
 * 
 * @import show from ..show scoped
 * 
 * @import from from ..from scoped
 * 
 * @param {mixed} insertNode 需要插入的节点
 * 
 * @param {mixed} baseNode 参照节点
 * 
 * @param {string} region 插入偏移位置
 * 
 * @return {data.Record} 如果插入成功则返回插入的节点引用，否则返回 false
 * 
 */

 insertNode = from(insertNode) || create(insertNode);

 baseNode = from(baseNode) ;

 let {
    placeholderNode
 } = this ;

if(baseNode && !isRootNode(baseNode) && baseNode !== placeholderNode){

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

    if(insertNode.parentNodeId){

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

    return insertNode ;
}

return false ;