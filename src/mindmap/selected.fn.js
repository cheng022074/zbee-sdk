
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

 if(selected){

    let me = this,
    {
       selectedNode
    } = me;

    if(selectedNode){

       selectedNode.selected = false ;
    }

    me.selectedNode = node ;
 }

 return selected ;