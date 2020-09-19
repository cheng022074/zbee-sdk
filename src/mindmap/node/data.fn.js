
/**
 * 
 * 获取节点实际的数据信息
 * 
 * @import isRootNode from .is.root scoped
 * 
 * @import isLeafNode from .is.leaf scoped
 * 
 * @import getData from ..data.node.data scoped
 * 
 * @import getRegion from ..region scoped
 * 
 * @import from from ..data.node.from scoped
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

      leaf(node){

         return isLeafNode(node) ;
      }
 } ;

 function main(node){

   node = from(node) ;

   let {
      hidden
   } = node,
   data = getData(node , addFields);

   if(!hidden){

      let me = this,
      {
         padding,
         height
      } = me,
      {
         height:regionHeight
      } = getRegion(),
      heightPadding = 0;

      delete data.x ;

      data.x = node.x + padding ;
   
      if(height !== regionHeight){
   
         heightPadding = padding ;
      }

      delete data.y ;
   
      data.y = node.y + heightPadding ;

   }
   
   return data ;
 }

 

 