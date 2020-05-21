
/**
 * 
 * 获取第一个叶子节点
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
    } = node ;

    if(expanded && children.length){

        return getNode(children[0]) ;
    
    }else{

        return node ;
    }
}