
/**
 * 
 * 取消选定
 * 
 */

 let me = this,
 {
    selectedNode,
    proxy
 } = me ;

 if(selectedNode){

    selectedNode.selected = false ;

    delete me.selectedNode ;

    proxy.call('deselect' , selectedNode.index) ;
 }