
/**
 * 
 * 获取父节点
 * 
 * @import getParentNode from mindmap.node.parent scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {data.Record} 所获取的父节点
 * 
 */


 let {
    layoutNodes
 } = this,
 parentNode = getParentNode(node);

 if(parentNode && layoutNodes.includes(parentNode)){

    return parentNode ;
 }