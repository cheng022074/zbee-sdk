
/**
 * 
 * 向右移动选择节点
 * 
 * @import select from ..select scoped
 * 
 */

let me = this,
{
    children
} = me.selectedNode;

if(children.length){

    return select(children[0]) ;
}

 return false ;