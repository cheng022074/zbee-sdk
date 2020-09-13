
/**
 * 
 * 展开节点
 * 
 * @import from from .node.from scoped
 * 
 * @import expand from .node.expand scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 */

node = from(node) ;

if(expand(node)){

    this.layout() ;
}