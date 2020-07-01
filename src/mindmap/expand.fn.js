
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
 * @import fireDrawEvent from .fire.draw scoped
 * 
 * @param {string} id 节点编号
 * 
 */

let me = this,
{
    selectedNode
} = me ;

if(expand(selectedNode)){

    await tryLayout(false) ;

    let firstChildNode = getFirstChildNode(selectedNode) ;

    if(getLevel(firstChildNode) === 4){

        ellipsis(selectedNode , 3) ;
    }

    fireDrawEvent() ;
}