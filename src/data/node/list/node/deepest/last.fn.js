
/**
 * 
 * 获取指定节点最底部的叶子节点
 * 
 * @import getLastNode from ..last
 * 
 * @param {mixed} node 节点
 * 
 * @return {mixed} 叶子节点 
 * 
 */

 let {
    nodeMap
 } = this,
 childNodes = nodeMap.get(node),
 {
     length
 } = childNodes;

 if(length){

    let lastNode = childNodes[length - 1],
        deepNode = getLastNode(lastNode);

    if(deepNode){

        return deepNode ;
    }

    return lastNode ;
 }
