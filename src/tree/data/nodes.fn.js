
/**
 * 
 * 用于树型节点数据化
 * 
 * @import from from array.from
 * 
 * @param {mixed} nodes 树型节点数据
 * 
 * @return {array} 数据化后的节点集合 
 * 
 */

nodes = from(nodes) ;

let result = [] ;

for(let node of nodes){

    result.push(node.data) ;
}

return result ;

 