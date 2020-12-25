
/**
 * 
 * 设置节点大小
 * 
 * @import get from .get scoped
 * 
 * @import unsized from .unsized.unregister scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @param {number} width 宽度
 * 
 * @param {number} height 高度
 * 
 * @param {boolean} [isLayout = false] 是否强制布局
 * 
 */

 node = get(node);

 if(node){

    node.width = width;

    node.height = height;

    if(isLayout){

      this.layout() ;
    
    }else{

      unsized(node) ;
    }
 }
 