
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
 * @import isNode from is.data.record
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
} = me,
isNewNode = !isNode(node);

if(restructuring){

   return;
}

beforeNode = from(beforeNode) ;

if(isNewNode){

   node = insert(node , beforeNode) ;

}else{

   let {
      selected
   } = node ;

   node = insert(node , beforeNode) ;

   if(selected && node){

      node.selected = true ;
   }
}

if(node){

   if(!isSilentMode){

      me.fireEvent('nodeinsertbefore' , data(node) , data(beforeNode) , isNewNode) ;
   
      order(getParentNode(beforeNode)) ;
   
      select(node) ;  
   
   }else{
   
      me.layout() ;
   }
}
