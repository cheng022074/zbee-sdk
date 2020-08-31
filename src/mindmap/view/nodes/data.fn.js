
/**
 * 
 * 获得节点的指定字段集合
 * 
 * @import data from ..node.data
 * 
 * @param {array} nodes 脑图节点集合
 * 
 * @param {mixed} fields 脑图字段
 * 
 * @return {array} 数据字段节点集合
 * 
 */

 let result = [] ;

 for(let node of nodes){

    result.push(data(node , fields)) ;
 }

 return result ;
