
/**
 * 
 * 插入节点
 * 
 * @import create from .create scoped
 * 
 * @import isRootNode from .is.root scoped
 * 
 * @import getParentNode from .parent scoped
 * 
 * @import show from .show scoped
 * 
 * @param {mixed} [insertNode = {}] 需要插入的节点
 * 
 * @param {data.Record} baseNode 参照节点
 * 
 * @param {number} [offset = 0] 插入偏移位置
 * 
 * @return {data.Record} 插入后的节点
 * 
 */

if(!isRootNode(baseNode)){

    let parentNode = getParentNode(baseNode),
    {
        children
    } = parentNode,
    {
        length
    } = children;

    insertNode = create(insertNode , parentNode) ;

    let index = children.indexOf(baseNode) + offset ;

    if(index > length - 1){

        index = length ;
    
    }else if(index < 0){

        index = 0 ;
    }

    children.splice(index , 0 , insertNode) ;

    if(!baseNode.hidden){

        show(insertNode) ;
    }

    return insertNode ;
}