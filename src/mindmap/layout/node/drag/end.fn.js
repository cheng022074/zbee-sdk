
/**
 * 
 * 结束拖曳节点
 * 
 * @import getDescendantNodes from ....nodes.descendant scoped
 * 
 * @import getParentNode from ....node.parent scoped
 * 
 * @import insertBefore from mindmap.node.insert.before scoped
 * 
 * @import insertAfter from mindmap.node.insert.after scoped
 * 
 * @import append from mindmap.node.append scoped
 * 
 */

let me = this,
{
    draggingNode,
    dragOperation,
    dragOperationNode
} = me ;

delete me.draggingNode ;

delete me.dragOperation ;

delete me.dragOperationNode ;

if(!draggingNode){

    return false ;
}

draggingNode.dragging = false ;

let nodes = getDescendantNodes(draggingNode) ;

for(let node of nodes){

    node.dragging = false ;

}

let {
    placeholderNode
} = me,
parentNode = getParentNode(placeholderNode) ;

if(!parentNode){

    return true ;
}

let {
    children
} = parentNode ;

children.splice(children.indexOf(placeholderNode) , 1) ;

placeholderNode.hidden = false ;

placeholderNode.parentNodeId = null ;

switch(dragOperation){

    case 'append':

        append(draggingNode , dragOperationNode) ;

        break ;

    case 'insertBefore':

        insertBefore(draggingNode , dragOperationNode) ;

        break ;

    case 'insertAfter':

        insertAfter(draggingNode , dragOperationNode) ;
}

return true ;