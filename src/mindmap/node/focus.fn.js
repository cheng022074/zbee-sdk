
/**
 * 
 * 聚焦节点
 * 
 * @import from from .from scoped
 * 
 * @import reset from .reset scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @param {number} [level] 显示层数
 * 
 * @return {boolean} 如果聚焦成功则返回 true , 否则返回 false
 * 
 */

 let me = this,
 {
    focusNode
 } = me;

 node = from(node) ;

 if(focusNode !== node){

    reset() ;

    me.focusNode = node ;
 }