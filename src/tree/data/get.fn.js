
/**
 * 
 * 获得当前树型结构的所有节点数据
 * 
 * @return {array} 一组数据 
 * 
 */

 let {
    nodes
 } = this,
 result = [];

 for(let {
     data
 } of nodes){

    result.push(data) ;
 }

 return result ;