
/**
 * 
 * 展开节点
 * 
 * @import expand from .node.expand scoped
 * 
 * @import tryLayout from .layout.try scoped  
 * 
 * @param {string} id 节点编号
 * 
 */

let me = this,
{
    selectedNode
} = this ;

if(expand(selectedNode)){

    await tryLayout() ;
}

   