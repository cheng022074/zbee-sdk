
/**
 * 
 * 结束拖曳节点
 * 
 * @import getDescendantNodes from ....nodes.descendant scoped
 * 
 * @import getParentNode from ....node.parent scoped
 * 
 */

let me = this,
{
    draggingNode
} = me ;

if(!draggingNode){

    return false ;
}

{
    let {
        placeholderNode
    } = me,
    parentNode = getParentNode(placeholderNode) ;

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
    delete me.draggingNode ;

    draggingNode.dragging = false ;

    let nodes = getDescendantNodes(draggingNode) ;

    for(let node of nodes){

        node.dragging = false ;

    }
}

return true ;