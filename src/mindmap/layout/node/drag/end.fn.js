
/**
 * 
 * 结束拖曳节点
 * 
 * @import getDescendantNodes from ....nodes.descendant scoped
 * 
 */

let me = this,
{
    draggingNode
} = me ;

if(!draggingNode){

    return false ;
}

delete me.draggingNode ;

draggingNode.dragging = false ;

let nodes = getDescendantNodes(draggingNode) ;

for(let node of nodes){

   node.dragging = false ;

}

return true ;