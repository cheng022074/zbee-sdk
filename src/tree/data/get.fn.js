
/**
 * 
 * 获得当前树型结构的所有节点数据
 * 
 * @return {array} 一组数据 
 * 
 */

 let me = this,
 {
   rootNode
 } = me ;

 if(!rootNode){

   return [] ;
 }

 let {
    nodes
 } = me.list,
 result = [];

 for(let {
     data
 } of nodes){

    result.push(data) ;
 }

 return result ;