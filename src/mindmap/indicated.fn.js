
/**
 * 
 * 设置节点指示标识
 * 
 * @param {data.Record} node 节点
 * 
 * @param {boolean} indicated 指示标识值
 * 
 * @return {boolean} 提示标识值 
 * 
 */

 let me = this,
 {
    restructureIndicatedNode
 } = me ;

 if(indicated){

    if(restructureIndicatedNode){

        restructureIndicatedNode.indicated = false ;
    }

    me.restructureIndicatedNode = node ;
 }

 return indicated ;