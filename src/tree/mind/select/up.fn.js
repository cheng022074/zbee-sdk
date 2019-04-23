
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

    let {
        prev:prevNode
    } = selectedNode ;

    if(prevNode){

        me.select(prevNode.id) ;
    }
}