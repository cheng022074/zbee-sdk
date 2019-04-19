
/**
 * 
 * 获取树型节点
 * 
 * @param {string} id 基于编号定位树型节点
 * 
 * @return {tree.Node} 树型节点 
 * 
 */

 let {
    nodes
 } = this ;

 for(let node of nodes){

    if(node.id === id){

        return node ;
    }
 }