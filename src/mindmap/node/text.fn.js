
/**
 * 
 * 修改节点文本
 * 
 * @import get from .get scoped
 * 
 * @param {string} text 节点文本
 * 
 * @param {string} [id] 节点编号
 * 
 * 
 */

 let {
    selectedNode
 } = this,
 node = id ? get(id) : selectedNode;

 if(node){

    if(node.text !== text){

        node.text = text ;

        this.fireEvent('nodetextupdated' , node.id , text) ;
    }
 }