
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
 * @import insertAfterById from .after.id scoped
 * 
 * @import select from ..select scoped
 * 
 * @import isObject from is.object.simple
 * 
 * @param {mixed} node 插入的节点配置
 * 
 * @param {string} [beforeNodeId] 参数节点编号
 * 
 */

let me = this,
{
   restructuring
} = me,
isNewNode = isObject(node);

if(restructuring){

   return ;
}

 if(beforeNodeId){

   insertAfterById(node , beforeNodeId) ;
 
 }else{

   let {
      selectedNode
   } = me ;

   node = insert(node , selectedNode) ;

   if(node){

      me.fireEvent('nodeinsertafter' , data(node) , data(selectedNode) , isNewNode) ;

      order(getParentNode(selectedNode)) ;

      select(node.id , false) ;

      await tryLayout() ;
   }
 }