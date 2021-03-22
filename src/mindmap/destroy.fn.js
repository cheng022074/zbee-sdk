
/**
 * 
 * 销毁脑图实例
 * 
 * @import remove from .node.delete scoped
 * 
 */

 let me = this,
 {
    rootNode,
    nodes
 } = me,{
    children
 } = rootNode ;

 me.removeAllListeners() ;

 for(let childNode of children){

    remove(childNode) ;
 }

 nodes.clear() ;






