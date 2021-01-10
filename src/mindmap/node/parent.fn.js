
/**
 * 
 * 获取指定节点的父节点引用
 * 
 * @import data from .data scoped
 * 
 * @import is.string
 * 
 * @import query from .query scoped
 * 
 * @param {data.Record|string} node 节点
 * 
 * @param {boolean} [isReturnData = false] 是否返回数据
 * 
 * @return {data.Record|object} 父节点 
 * 
 */

 if(isString(node)){

   node = query(node) ;

   if(!node){

      return ;
   }
 }

 let {
  parentNodeId
 } = node ;

 if(parentNodeId){

   let parentNode = query(parentNodeId) ;

   if(isReturnData){

      return data(parentNode) ;
   }

   return parentNode ;

 }

