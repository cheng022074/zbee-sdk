
/**
 * 
 * 获取最后一个叶子节点
 * 
 * @import getLeafNodes from ....nodes.leaf
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {data.Record} 叶子节点
 * 
 */

let nodes = getLeafNodes(node),
{
    length
} = nodes;

if(length){

    return nodes[length - 1] ;
}