
/**
 * 
 * 合并节点列表
 * 
 * @param {data.node.List} list 节点列表
 * 
 * 
 */

 let {
     startNode,
     endNode
 } = list,
 {
    nodes,
    nodeMap
 } = this;

if(!nodes.includes(startNode) && !nodes.includes(endNode)){

    nodes.push(...list.nodes) ;

    list.nodeMap.forEach((value , key) => nodeMap.set(key , value)) ;

}else if(!(nodes.includes(startNode) && nodes.includes(endNode))){

    throw new Error('无法合并交差节点集合') ;
}