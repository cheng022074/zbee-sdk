
/**
 * 
 * 收起节点
 * 
 * @import layout from .layout scoped
 * 
 * @import collapse from .node.collapse scoped
 * 
 * @import cancelEllipsis from .node.ellipsis.cancel.passive scoped
 * 
 */

let {
    selectedNode
} = this ;

if(collapse(selectedNode)){

    cancelEllipsis() ;

    layout() ;
}