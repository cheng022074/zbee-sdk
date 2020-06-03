
/**
 * 
 * 获取指定节点的父节点引用
 * 
 * @import isRootNode from .is.root
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

 if(!isRootNode(node)){

   let parentNode = query(node.parentNodeId) ;

   if(isReturnData){

      return data(parentNode) ;
   }

   return parentNode ;

 }

