
/**
 * 
 * 获取第一个子节点
 * 
 * @param {data.Record} node 节点
 * 
 */

 let {
    children
 } = node;

 if(children.length){

    return children[0] ; 
 }