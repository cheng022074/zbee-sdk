
/**
 * 
 * 获取父节点
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {data.Record} 所获取的父节点
 * 
 */


 let {
    nodes,
    layoutNodes
 } = this,
 {
    parentNodeId
 } = node,
 parentNode = nodes.get(parentNodeId);

 if(parentNode && layoutNodes.includes(parentNode)){

    return parentNode ;
 }