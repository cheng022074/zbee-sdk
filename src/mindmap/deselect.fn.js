
/**
 * 
 * 取消脑图选择
 * 
 */

 let me = this,
 {
    selectedNode
 } = me ;

 if(selectedNode){

    selectedNode.selected = false ;

    me.layout() ;
 }