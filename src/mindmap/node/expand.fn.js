
/**
 * 
 * 展开节点
 * 
 * @import show from .show scoped
 * 
 * @import isLeaf from .is.leaf scoped
 * 
 * @param {data.Record} node 节点
 * 
 */


let me = this,
{
    id
} = node,
{
    visibilityNodes
} = me ;

if(visibilityNodes.has(id)){

    let node = visibilityNodes.get(id),
    {
        expanded
    } = node;

    if(!expanded && !isLeaf(node)){

        node.expanded = true ;

        let {
            children
        } = node ;

        for(let childNode of children){

            show(childNode) ;
        }
    }
}