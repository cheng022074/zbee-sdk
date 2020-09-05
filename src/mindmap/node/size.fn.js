
/**
 * 
 * 设置节点大小
 * 
 * @import get from .get scoped
 * 
 * @import unsized from .unsized.unregister scoped
 * 
 * @param {string} id 编号
 * 
 * @param {number} width 宽度
 * 
 * @param {number} height 高度
 * 
 */

 let ode = get(id);

 if(node){

    node.width = width;

    node.height = height;

    unsized(node) ;
 }
 