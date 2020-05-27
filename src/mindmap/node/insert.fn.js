
/**
 * 
 * 插入节点
 * 
 * @import isRootNode from ..is.root scoped
 * 
 * @import getParentNode from ..parent scoped
 * 
 * @param {data.Record} insertNode 需要插入的节点
 * 
 * @param {data.Record} beforeNode 参照节点
 * 
 * @param {number} offset 插入偏移位置
 * 
 * @return {data.Record} 插入后的节点
 * 
 */

let {
    hidden
} = beforeNode ;

if(!hidden && !isRootNode(beforeNode)){

    let {
        children
    } = getParentNode(beforeNode),
    {
        length
    } = children,
    index = children.indexOf(beforeNode) + offset;

    if(index > length - 1){

        index = length ;
    
    }else if(index < 0){

        index = 0 ;
    }

    children.splice(index , 0 , insertNode) ;

    return insertNode ;
}