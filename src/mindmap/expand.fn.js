
/**
 * 
 * 展开节点
 * 
 * @import getAncestorNode from .node.ancestor scoped
 * 
 * @import getLevel from .node.level scoped
 * 
 * @import expand from .node.expand scoped
 * 
 * @import tryLayout from .layout.try scoped
 * 
 * @import getFirstChildNode from .node.child.first scoped
 * 
 * @import getAncestorNode from .node.ancestor scoped
 * 
 * @import ellipsis from .node.ellipsis scoped
 * 
 * @param {string} id 节点编号
 * 
 */

let me = this,
{
    selectedNode,
    visibilityLevel
} = me ;

if(expand(selectedNode)){

    let firstChildNode = getFirstChildNode(selectedNode) ;

    if(getLevel(firstChildNode) > visibilityLevel){

        ellipsis(selectedNode , visibilityLevel - 1) ;
    }

    await tryLayout() ;
}