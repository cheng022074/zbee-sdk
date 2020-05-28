
/**
 * 
 * 未设置尺寸的节点的事件派发
 * 
 * @param {data.Record} node 节点
 * 
 */

let {
    id
} = node,
me = this,
{
    unsizedNodes
} = me;

let {
    width,
    height
} = node ; 

if(!(width && height)){

    unsizedNodes.set(id , node) ;

    me.fireNodeCreatedEvent() ;
}