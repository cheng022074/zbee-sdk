
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
 * @param {mixed} node 插入的节点配置
 * 
 * @param {string} beforeNodeId 参数节点编号
 * 
 */

let beforeNode = get(beforeNodeId),
    me = this;

if(beforeNode){

   node = insert(node , beforeNode) ;

   if(node === false){

        return ;
   }

   me.fireEvent('nodeinsertbefore' , data(node) , data(beforeNode)) ;

   if(!beforeNode.hidden){

       await tryLayout() ;
   
   }
}
