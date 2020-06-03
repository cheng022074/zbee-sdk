
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
 * @param {mixed} node 插入的节点配置
 * 
 * @param {string} [beforeNodeId] 参数节点编号
 * 
 */

 if(beforeNodeId){

   insertAfterById(node , beforeNodeId) ;
 
 }else{

   let me = this,
   {
      selectedNode
   } = me ;

   node = insert(node , selectedNode) ;

   if(node){

      node.selected = true ;

      tryLayout().then(() => {

         me.fireEvent('nodeinsertafter' , data(node) , data(selectedNode)) ;

         order(getParentNode(selectedNode)) ;

      }) ;
   }
 }