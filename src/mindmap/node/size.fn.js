
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
 * @param {number} offsetWidth 横向偏移
 * 
 * @param {number} offsetHeight 纵向偏移
 * 
 * @param {boolean} [isLayout = false] 是否强制布局
 * 
 */

 node = get(node);

 if(node){

    node.width = width + offsetWidth;

    node.offsetWidth = offsetWidth ;

    node.height = height + offsetHeight;

    node.offsetHeight = offsetHeight ;

    if(isLayout){

      this.layout() ;
    
    }else{

      unsized(node) ;
    }
 }
 