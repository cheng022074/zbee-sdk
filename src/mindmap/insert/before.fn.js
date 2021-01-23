
/**
 * 
 * 在选定节点之前插入
 * 
 * @import insert from ..node.insert.before scoped
 * 
 * @import select from ..select scoped
 * 
 * @import data from ..node.data scoped
 * 
 * @import order from ..order scoped
 * 
 * @import getParentNode from ..node.parent scoped
 * 
 * @import from from ..node.from scoped
 * 
 * @param {mixed} node 插入的节点配置
 * 
 * @param {mixed} [beforeNode] 参考脑图节点
 * 
 * @param {boolean} [isSilentMode = false] 是否静默模式
 * 
 */

let me = this,
{
   restructuring
} = me;

if(restructuring){

   return;
}

let nodeSelected,
    isNewNode = true;

if(from(node)){

   isNewNode = false ;

   nodeSelected = node.selected ;
}

node = insert(node , from(beforeNode)) ;

if(node){

   if(nodeSelected){

      node.selected = true ;
   }

   if(!isSilentMode){

      me.fireEvent('nodeinsertbefore' , data(node) , data(beforeNode) , isNewNode) ;
   
      order(getParentNode(beforeNode)) ;
   
      if(!select(node)){

         me.layout() ;
      }  
   
   }else{
   
      me.layout() ;
   }
}