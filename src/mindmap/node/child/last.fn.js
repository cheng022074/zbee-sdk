
/**
 * 
 * 获取第一个子节点
 * 
 * @param {data.Record} node 节点
 * 
 */

 let {
    children
 } = node,
 {
    length
 } = children;

 if(length){

    return children[length - 1] ; 
 }