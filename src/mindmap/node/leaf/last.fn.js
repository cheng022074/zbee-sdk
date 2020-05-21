
/**
 * 
 * 获取最后一个叶子节点
 * 
 * @import getNode from .first
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {data.Record} 叶子节点
 * 
 */

let {
    hidden
} = node,
result = [];

if(!hidden){

    let {
        expanded,
        children
    } = node,
    {
        length
    } = children;

    if(expanded && length){

        return getNode(children[length - 1]) ;
    
    }else{

        return node ;
    }
}