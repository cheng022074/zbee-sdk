
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
 * @import getDeepestLeafNode from .node.leaf.deepest scoped
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

    let deepestLeafNode = getDeepestLeafNode(selectedNode) ;

    if(getLevel(deepestLeafNode) > visibilityLevel){

        ellipsis(deepestLeafNode , visibilityLevel) ;
    }

    await tryLayout() ;
}