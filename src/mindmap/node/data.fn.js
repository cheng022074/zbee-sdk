
/**
 * 
 * 获取节点参数级数据信息
 * 
 * @import data from ..data scoped
 * 
 * @import isRootNode from .is.root scoped
 * 
 * @import isLeafNode from .is.leaf scoped
 * 
 * @param {mixed} node 节点
 * 
 * @return {object} 数据信息 
 * 
 */

 return data(node , {

   root(node){

      return isRootNode(node) ;
   },

   leaf(node){

      return isLeafNode(node) ;
   }
 }) ;