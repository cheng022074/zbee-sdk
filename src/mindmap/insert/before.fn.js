
/**
 * 
 * 在选定节点之前插入
 * 
 * @import insert from ..node.insert.before scoped
 * 
 * @import tryLayout from ..layout.try scoped
 * 
 * @import data from ..node.data scoped
 * 
 * @import order from ..order scoped
 * 
 * @import getParentNode from ..node.parent scoped
 * 
 * @import insertBeforeById from .before.id scoped
 * 
 * @param {mixed} node 插入的节点配置
 * 
 * @param {string} [beforeNodeId] 参数节点编号
 * 
 */

let me = this,
{
   restructuring
} = me;

if(!restructuring){

   return ;
}

 if(beforeNodeId){

  insertBeforeById(node , beforeNodeId) ;
 
 }else{

  let {
        selectedNode
    } = me ;
    
    node = insert(node , selectedNode) ;

    if(node){

      node.selected = true ;
      
      tryLayout().then(() => {

        me.fireEvent('nodeinsertbefore' , data(node) , data(selectedNode)) ;

        order(getParentNode(selectedNode)) ;

      }) ;
    }
 }