
/**
 * 
 * 设置节点大小
 * 
 * @import get from .get scoped
 * 
 * @param {string} id 编号
 * 
 * @param {number} width 宽度
 * 
 * @param {number} height 高度
 * 
 */

 let me = this,
 {
    waitInitSizeNodes
 } = me,
 node = get(id);

 if(node){

    node.width = width;

    node.height = height;

    waitInitSizeNodes.delete(id) ;

    if(waitInitSizeNodes.size === 0){

         me.fireEvent('nodesized') ;
    }
 }
 