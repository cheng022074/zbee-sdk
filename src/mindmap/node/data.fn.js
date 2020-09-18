
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
 * @param {array} [fields] 字段数组
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

 function main(node , fields){

   node = from(node) ;

   let {
      hidden
   } = node,
   data = getData(node , {
      fields,
      addFields
   });

   if(!hidden){

      let me = this,
      {
         padding
      } = me ;

      if(data.hasOwnProperty('x')){
      
         data.x += padding ;
      }

      if(data.hasOwnProperty('y')){

         let {
            height
         } = me ;
   
         let {
            height:regionHeight
         } = getRegion(),
         heightPadding = 0;
      
         if(height !== regionHeight){
      
            heightPadding = padding ;
         }
      
         data.y += heightPadding ;
      
      }

   }
   
   return data ;
 }

 

 