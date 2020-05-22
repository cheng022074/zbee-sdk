
/**
 * 
 * 获取第一个叶子节点
 * 
 * @import getLeafNodes from ....nodes.leaf
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {data.Record} 叶子节点
 * 
 */

let nodes = getLeafNodes(node) ;

if(nodes.length){

    return nodes[0] ;
}