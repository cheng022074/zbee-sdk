
/**
 * 
 * 选定节点
 * 
 * @import deselect from ..deselect scoped
 * 
 * @import get from tree.node.get scoped
 * 
 * @param {string} id 需要选定的节点
 * 
 */

 let me = this,
 {
    proxy
 } = me,
 node = get(id) ;

if(node){

    deselect() ;

    node.selected = true ;

    me.selectedNode = node ;

    proxy.call('select' , node.index) ;
}

