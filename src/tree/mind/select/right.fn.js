
/**
 * 
 * 向右选择节点
 * 
 */

let me = this,
{
   selectedNode
} = me ;

if(selectedNode){

    let relationship = selectedNode.relationship.right() ;

    if(relationship){

        me.select(relationship.node.id) ;
    }
}