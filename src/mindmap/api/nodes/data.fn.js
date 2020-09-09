
/**
 * 
 * 获得数据集合
 * 
 * @import data from ....data.node.data scoped
 * 
 * @param {array} nodes 一组脑图节点
 * 
 * @return {array} 一组脑图节点的数据形式
 * 
 */

 let result = [] ;

 for(let node of nodes){

    result.push(data(node)) ;
 }

 return result ;