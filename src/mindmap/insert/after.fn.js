
/**
 * 
 * 在选定节点之前插入
 * 
 * @import insert from ..node.insert.after scoped
 * 
 * @import tryLayout from ..layout.try scoped
 * 
 * @import order from ..order
 * 
 * @import getParentNode from ..node.parent scoped
 * 
 * @param {mixed} node 插入的节点配置
 * 
 * @param {data.Record} afterNode 参数节点
 * 
 */

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