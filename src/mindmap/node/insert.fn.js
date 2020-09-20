
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

    insertNode = from(insertNode) ;

    if(insertNode){

        if(insertNode === baseNode){

            return ;
        }

        switch(region){

            case 'before':

                if(getPreviousNode(baseNode) === insertNode){

                    return ;
                }

                break;

            case 'after':

                if(getNextNode(baseNode) === insertNode){

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

    let index = children.indexOf(baseNode) ;

    switch(region){

        case 'before':

            index -- ;

            break ;

        case 'after':

            index ++ ;
    }

    if(index > length - 1){

        index = length ;
    
    }else if(index < 0){

        index = 0 ;
    }
    
    insertNode = create(insertNode , parentNode) ;

    children.splice(index , 0 , insertNode) ;

    if(!baseNode.hidden){

        show(insertNode) ;
    }

    return insertNode ;
}