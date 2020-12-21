/**
 * 
 * 选中节点向上移动
 * 
 * @import previous from ..node.sibling.previous scoped
 * 
 * @import insertBefore from ..node.insert.before scoped
 * 
 */

let me = this,
{
    selectedNode
} = me,
node = previous(selectedNode) ;

if(node){

    insertBefore(selectedNode , node) ;

    selectedNode.selected = true ;

    me.layout() ;

}else{

    let {
        visibilityNodes
    } = me ;

    let node = visibilityNodes.getNearestNode(selectedNode , 'up') ;

    if(node){

        insertBefore(selectedNode , node) ;

        selectedNode.selected = true ;

        me.layout() ;
    }
}