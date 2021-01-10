
/**
 * 
 * 获取节点实际的数据信息
 * 
 * @import isRootNode from .is.root scoped
 * 
 * @import isLeafNode from .is.leaf scoped
 * 
 * @import getParentNode from .parent scoped
 * 
 * @import getData from ..data.node.data scoped
 * 
 * @import getX from .x scoped
 * 
 * @import getY from .y scoped
 * 
 * @import from from ..data.node.from scoped
 * 
 * @import getNodeData from .data scoped
 * 
 * @param {mixed} node 节点
 * 
 * @return {object} 数据信息 
 * 
 */

 const addFields = {
      root(node){

         return isRootNode(node) ;
      },

      hasParentNode(node){

         return !! getParentNode(node) ;
      },

      parentNode(node){

         let parentNode = getParentNode(node) ;

         if(parentNode){

            return getNodeData(parentNode) ;
         }
      },

      leaf(node){

         return isLeafNode(node) ;
      },

      x(node){

         return getX(node) ;
      },

      y(node){

         return getY(node) ;
      }
 } ;

 function main(node){

   return getData(from(node) , addFields);
   
 }

 

 