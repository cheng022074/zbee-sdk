
/**
 * 
 * 登记尺寸未设置的脑图节点
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @param {boolean} [forceSize = false] 强制重新计算大小 
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

 if(!unsizedNodes.has(id)){

   if((!hidden && !(width !== false && height !== false)) || forceSize){

      unsizedNodes.set(id , node) ;

      me.fireNodeUnsizedEvent() ;
   }
 }