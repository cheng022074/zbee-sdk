
/**
 * 
 * 在选定节点之前插入
 * 
 * @import insert from ..node.insert.after scoped
 * 
 * @import tryLayout from ..layout.try scoped
 * 
 * @import order from ..order scoped
 * 
 * @import data from ..node.data scoped
 * 
 * @import getParentNode from ..node.parent scoped
 * 
 * @import select from ..select scoped
 * 
 * @import isNode from is.data.record
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
} = me,
isNewNode = !isNode(node);

if(restructuring){

   return;
}

afterNode = from(afterNode) ;

if(isNewNode){

   node = insert(node , afterNode) ;

}else{

   let {
      selected
   } = node ;

   node = insert(node , afterNode) ;

   if(selected && node){

      node.selected = true ;
   }
}

if(node){

   if(!isSilentMode){

      me.fireEvent('nodeinsertafter' , data(node) , data(afterNode) , isNewNode) ;

      order(getParentNode(afterNode)) ;
   
      select(node) ;
   
   }else{

      me.layout() ;
   }
}
