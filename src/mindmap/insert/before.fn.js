
/**
 * 
 * 在选定节点之前插入
 * 
 * @import insert from ..node.insert.before scoped
 * 
 * @import select from ..select scoped
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

   return false;
}

 if(beforeNodeId){

  return insertBeforeById(node , beforeNodeId) ;
 
 }else{

  let {
        selectedNode
    } = me ;
    
    node = insert(node , selectedNode) ;

    if(node){

      me.fireEvent('nodeinsertbefore' , data(node) , data(selectedNode) , isNewNode) ;

      order(getParentNode(selectedNode)) ;

      select(node.id) ;

      return true ;
    }

    return false ;
 }