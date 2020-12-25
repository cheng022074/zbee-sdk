
/**
 * 
 * 收起节点
 * 
 * @import get from .node.get scoped
 * 
 * @import layout from .layout scoped
 * 
 * @import collapse from .node.collapse scoped
 * 
 * @import select from .select scoped
 * 
 * @import getParentNode from .data.node.parent scoped
 * 
 * @import data from .node.data scoped
 * 
 * @param {string} id 节点编号
 * 
 */

let node = get(id),
    me = this,
    {
        selectedNode
    } = me,
    oldSelectedNode = selectedNode;

if(node && collapse(node)){

    if(selectedNode){

        while(selectedNode.hidden){

            selectedNode = getParentNode(selectedNode) ;
        }
    
        if(oldSelectedNode !== selectedNode){
    
            selectedNode.selected = true ;
    
            me.fireEvent('nodeselect' , data(selectedNode) , data(oldSelectedNode)) ;
        }
    }

    me.layout() ;

    return true ;
}

return false ;