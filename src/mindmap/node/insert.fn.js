
/**
 * 
 * 插入节点
 * 
 * @import create from .create scoped
 * 
 * @import isRootNode from ..data.node.is.root scoped
 * 
 * @import getParentNode from ..data.node.parent scoped
 * 
 * @import getPreviousNode from ..data.node.slibing.previous scoped
 * 
 * @import getNextNode from ..data.node.slibing.next scoped
 * 
 * @import show from .show scoped
 * 
 * @import from from ..data.node.from scoped
 * 
 * @param {mixed} [insertNode = {}] 需要插入的节点
 * 
 * @param {mixed} baseNode 参照节点
 * 
 * @param {number} region 插入偏移位置
 * 
 * @return {data.Record} 插入后的节点
 * 
 */

if(!isRootNode(baseNode)){

    baseNode = from(baseNode) ;

    let insertMindmapNode = from(insertNode) ;

    if(insertMindmapNode){

        if(insertMindmapNode === baseNode){

            return ;
        }

        switch(region){

            case 'before':

                if(getPreviousNode(baseNode) === insertMindmapNode){

                    return ;
                }

                break;

            case 'after':

                if(getNextNode(baseNode) === insertMindmapNode){

                    return ;
                }
        }
    }

    let parentNode = getParentNode(baseNode),
    {
        children
    } = parentNode,
    {
        length
    } = children;

    insertNode = create(insertNode , parentNode) ;

    let index = children.indexOf(baseNode) ;

    if(region === 'after'){

        index ++ ;
    }

    if(index > length - 1){

        index = length ;
    
    }

    children.splice(index , 0 , insertNode) ;

    if(!baseNode.hidden){

        show(insertNode) ;
    }

    return insertNode ;
}