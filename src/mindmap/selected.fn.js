
/**
 * 
 * 设置选定状态
 * 
 * @param {data.Record} node 节点
 * 
 * @param {boolean} selected 节点选定状态
 * 
 * 
 */

let me = this,
{
   selectedNode
} = me;

 if(selected){

    if(selectedNode){

       selectedNode.selected = false ;
    }

    me.selectedNode = node ;
 
 }else if(me === selectedNode){

   delete me.selectedNode ;
   
 }

 return selected ;