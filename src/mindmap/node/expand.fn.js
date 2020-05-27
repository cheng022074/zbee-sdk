
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
 * @return {boolean} 如果正确展开则返回 true , 否则返回 false
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

    if(!expanded){

        node.expanded = true ;

        let {
            children
        } = node ;

        for(let childNode of children){

            show(childNode) ;
        }

        return true ;
    }
}

return false ;