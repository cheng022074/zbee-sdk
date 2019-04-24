
/**
 * 
 * 向上选择节点
 * 
 */

let me = this,
{
   selectedNode
} = me ;

if(selectedNode){

    let relationship = selectedNode.relationship.up() ;

    if(relationship){

        me.select(relationship.node.id) ;
    }
}