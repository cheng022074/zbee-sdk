
/**
 * 
 * 展开节点
 * 
 * @import expand from .node.expand.deep scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @param {number} [level = 1] 展开层次
 * 
 * @param {boolean} [isLayout = true] 是否布局
 * 
 */

if(expand(node , level) && isLayout){

    this.layout() ;

    return true ;
}

return false ;