
/**
 * 
 * 选定节点
 * 
 * @import get from tree.node.get scoped
 * 
 * @param {string} id 需要选定的节点
 * 
 */

 let me = this,
 {
    proxy,
    selectedNode
 } = me,
 node = get(id) ;

if(node){

    if(selectedNode){

        selectedNode.selected = false ;
        
        proxy.call('deselect' , selectedNode.index) ;
    }

    node.selected = true ;

    me.selectedNode = node ;

    proxy.call('select' , node.index) ;
}

