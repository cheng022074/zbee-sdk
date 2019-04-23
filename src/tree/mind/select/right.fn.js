
/**
 * 
 * 向右选择节点
 * 
 */

let me = this,
{
   selectedNode
} = me ;

if(selectedNode && !selectedNode.isLeaf){

    me.select(selectedNode.first.id) ;
}