
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
 */

let me = this,
{
    draggingNode
} = me ;

if(!draggingNode){

    return false ;
}

delete me.draggingNode ;

{ 
    let {
        placeholderNode
    } = me,
    parentNode = getParentNode(placeholderNode) ;

    if(!parentNode){

        return false ;
    }

    insertBefore(draggingNode , placeholderNode) ;

    if(parentNode){

        let {
            children
        } = parentNode ;

        children.splice(children.indexOf(placeholderNode) , 1) ;

        placeholderNode.hidden = false ;

        placeholderNode.parentNodeId = null ;
    }
}

{

    draggingNode.dragging = false ;

    let nodes = getDescendantNodes(draggingNode) ;

    for(let node of nodes){

        node.dragging = false ;

    }
}

return true ;