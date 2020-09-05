
/**
 * 
 * 在节点之前插入一个节点
 * 
 * @import insert from ....node.insert.before scoped
 * 
 * @import get from ....node.get scoped
 * 
 * @import tryLayout from ....layout.try scoped
 * 
 * @import data from ....node.data scoped
 * 
 * @import isObject from is.object.simple
 * 
 * @param {mixed} node 插入的节点配置
 * 
 * @param {string} beforeNodeId 参数节点编号
 * 
 */

let beforeNode = get(beforeNodeId),
    me = this,
    isNewNode = isObject(node);

if(beforeNode){

    let {
        id
    } = me.selectedNode ;

   node = insert(node , beforeNode) ;

   if(node === false){

        return false;
   }

    if(node.id === id){

        node.selected = true ;
    }

   me.fireEvent('nodeinsertbefore' , data(node) , data(beforeNode) , isNewNode) ;

   if(!beforeNode.hidden){

       me.layout() ;
   
   }

   return true ;
}

return false ;
