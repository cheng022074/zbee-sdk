
/**
 * 
 * 判断指定节点是否为叶子节点
 * 
 * @param {data.Record} node 节点
 * 
 * @return {boolean} 如果节点为叶子节点则返回 true , 否则 false
 * 
 */

 let {
   hidden
 } = node ;

 if(!hidden){

   let {
      children
   } = node ;
  
   return !children.length ;
 }

 return false ;

