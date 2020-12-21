/**
 * 
 * 选中节点向上移动
 * 
 * @import previous from ..node.sibling.previous scoped
 * 
 * @import insertBefore from ..node.insert.before scoped
 * 
 * @import data from ..node.data scoped
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

    me.fireEvent('nodeinsertbefore' , data(selectedNode) , data(node) , false) ;

    me.layout() ;

}else{

    let {
        visibilityNodes
    } = me ;

    let node = visibilityNodes.getNearestNode(selectedNode , 'up') ;

    if(node){

        insertBefore(selectedNode , node) ;

        selectedNode.selected = true ;

        me.fireEvent('nodeinsertbefore' , data(selectedNode) , data(node) , false) ;

        me.layout() ;
    }
}