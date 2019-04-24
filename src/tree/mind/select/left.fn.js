
/**
 * 
 * 向左选择节点
 * 
 */

let me = this,
{
   selectedNode
} = me ;

if(selectedNode){

    let relationship = selectedNode.relationship.left() ;

    if(relationship){

        me.select(relationship.node.id) ;
    }
}