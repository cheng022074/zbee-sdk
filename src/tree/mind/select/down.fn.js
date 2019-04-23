
/**
 * 
 * 向下选择节点
 * 
 */

let me = this,
{
   selectedNode
} = me ;

if(selectedNode){

    let {
        next:nextNode
    } = selectedNode ;

    if(nextNode){

        me.select(nextNode.id) ;
    }
}