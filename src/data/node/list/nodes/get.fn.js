
/**
 * 
 * 获取指定两个节点之间的所有节点集合
 * 
 * @param {mixed} startNode 开始节点
 * 
 * @param {mixed} endNode 结束节点
 * 
 * @return {array} 节点集合 
 * 
 */

 let {
    nodes
 } = this,
 startIndex = nodes.indexOf(startNode),
 endIndex = nodes.indexOf(endNode);

 if(startIndex !== -1 && endIndex !== -1){

    return nodes.slice(startIndex , endIndex + 1) ;
 }

 return [] ;