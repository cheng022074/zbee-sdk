
/**
 * 
 * 获得子节点集合
 * 
 * @import cache from mindmap.layout.cache scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {array} 子节点集合 
 * 
 */

 function main(node){

   return cache(node , 'getChildNodes' , getChildNodes) ;
 }

 function getChildNodes(node){

   let {
      children,
      expanded
   } = node;

   if(!expanded){

      return [] ;
   }

   let result = [],
   {
      layoutNodes
   } = this;

   for(let childNode of children){

      if(!childNode.hidden && layoutNodes.includes(childNode)){

         result.push(childNode) ;
      }
   }

   return result ;

 }