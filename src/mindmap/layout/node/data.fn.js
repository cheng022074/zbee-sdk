
/**
 * 
 * 获取节点参数级数据信息
 * 
 * @import data from mindmap.data scoped
 * 
 * @import isRootNode from .is.root scoped
 * 
 * @import isLeafNode from .is.leaf scoped
 * 
 * @import getParentNode from mindmap.node.parent scoped
 * 
 * @import getTopSpacing from .spacing.top scoped
 * 
 * @param {mixed} node 节点
 * 
 * @param {object} offset 坐标偏移值
 * 
 * @return {object} 数据信息 
 * 
 */

let {
   patternName
} = this.layoutConfig ;

 return data(node , {

   root(node){

      return isRootNode(node) ;
   },

   parent(node){

      return !! getParentNode(node) ;
   },

   leaf(node){

      return isLeafNode(node) ;
   },

   x(node){

      if(patternName === 'mindmap.layout.pattern.absolutely'){

         return Math.max(node.x , offset.x) ;
      }

      return node.x + offset.x ;
   },

   y(node){

      if(patternName === 'mindmap.layout.pattern.absolutely'){

         return Math.max(node.y , offset.y) ;
      }

      return node.y + offset.y ;
   },

   wrapperY(node){

      if(patternName === 'mindmap.layout.pattern.absolutely'){

         return Math.max(node.y , offset.y) - getTopSpacing(node) ;
      }

      return node.y + offset.y - getTopSpacing(node) ;
   }

 }) ;