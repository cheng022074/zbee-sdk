
/**
 * 
 * 获取父节点
 * 
 * @import getParentNode from mindmap.node.parent scoped
 * 
 * @import cache from mindmap.layout.cache scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {data.Record} 所获取的父节点
 * 
 */

 function main(node){

   return cache(node , 'getParentNode' , getLayoutedParentNode) ;
 
 }

 function getLayoutedParentNode(node){

   let {
      layoutNodes
   } = this,
   parentNode = getParentNode(node);
  
   if(parentNode && layoutNodes.includes(parentNode)){
  
      return parentNode ;
   }
 }