
/**
 * 
 * 收起节点
 * 
 * @import from from .node.from scoped
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
 * @param {mixed} node 脑图节点
 * 
 * @param {number} [level = 1] 收起层次
 * 
 */

 function main(node , level){

    node = from(node) ;

    let me = this,
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
 }

