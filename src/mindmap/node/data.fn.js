
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

 const fields = {
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
   data;

   if(!hidden){
   
      data = getData(node , fields) ;

      data.width = node.width;

      data.height = node.height;

      data.restructuring = node.restructuring;

      data.placeholder = node.placeholder;

      data.indicated = node.indicated;

      data.editing = node.editing;

      data.ellipsis = node.ellipsis;

      data.expanded = node.expanded;

      let {
         properties
      } = node ;

      for(let property of properties){

         data[property] = node[property];
      }

      let {
         height,
         padding
      } = this ;
   
      data.x = node.x + padding ;

      let {
         height:regionHeight
      } = getRegion(),
      heightPadding = 0;
   
      if(height !== regionHeight){
   
         heightPadding = padding ;
      }
   
      data.y = node.y + heightPadding ;
   
   }else{

      data = getData(node) ;
   }
   
   return data ;
 }

 

 