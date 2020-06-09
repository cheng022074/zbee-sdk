
/**
 * 
 * 在节点之后插入一个节点
 * 
 * @import insert from ....node.insert.after scoped
 * 
 * @import get from ....node.get scoped
 * 
 * @import tryLayout from ....layout.try scoped
 * 
 * @import data from ....node.data scoped
 * 
 * @param {mixed} node 插入的节点配置
 * 
 * @param {string} afterNodeId 参数节点编号
 * 
 */

 let afterNode = get(afterNodeId),
     me = this;

 if(afterNode){

    node = insert(node , afterNode) ;

    if(node === false){

        return ;
    }

    me.fireEvent('nodeinsertafter' , data(node) , data(afterNode)) ;

    if(!afterNode.hidden){

        await tryLayout();
    
    }
 }
