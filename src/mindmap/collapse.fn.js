
/**
 * 
 * 收起节点
 * 
 * @import isLeaf from .node.is.leaf scoped
 * 
 * @import layout from .layout scoped
 * 
 * @import hide from .node.hide scoped
 * 
 * @import cancelEllipsis from .node.ellipsis.cancel.passive scoped
 * 
 */

let {
    selectedNode
} = this,
{
    expanded
} = selectedNode;

if(expanded && !isLeaf(selectedNode)){

    let {
        children
    } = selectedNode ;

    for(let childNode of children){

        hide(childNode) ;
    }

    selectedNode.expanded = false ;

    cancelEllipsis() ;

    layout() ;
}