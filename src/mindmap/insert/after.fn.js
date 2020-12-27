
/**
 * 
 * 在选定节点之前插入
 * 
 * @import insert from ..node.insert.after scoped
 * 
 * @import order from ..order scoped
 * 
 * @import data from ..node.data scoped
 * 
 * @import getParentNode from ..node.parent scoped
 * 
 * @import select from ..select scoped
 * 
 * @import from from ..node.from scoped
 * 
 * @param {mixed} node 插入的节点配置
 * 
 * @param {mixed} [afterNode] 参考脑图节点
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

node = insert(node , afterNode) ;

if(node){

   if(nodeSelected){

      node.selected = true ;
   }

   if(!isSilentMode){

      me.fireEvent('nodeinsertafter' , data(node) , data(afterNode) , isNewNode) ;

      order(getParentNode(afterNode)) ;
   
      if(!select(node)){

         me.layout() ;
      }
   
   }else{

      me.layout() ;
   }
}
