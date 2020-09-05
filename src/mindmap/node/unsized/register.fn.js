
/**
 * 
 * 登记尺寸未设置的脑图节点
 * 
 * @param {data.Record} node 脑图节点
 * 
 */

 let me = this,
 {
    unsizedNodes
 } = me,
 {
    id,
    hidden,
    width,
    height
 } = node;

 if(!unsizedNodes.has(id) && !hidden && !(width && height)){

    unsizedNodes.set(id , node) ;

    me.fireNodeUnsizedEvent() ;
 }