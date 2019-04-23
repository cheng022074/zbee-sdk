
/**
 * 
 * 向左选择节点
 * 
 */

let me = this,
{
   selectedNode
} = me ;

if(selectedNode && !selectedNode.isRoot){

    me.select(selectedNode.parentNode.id) ;
}