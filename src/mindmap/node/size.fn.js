
/**
 * 
 * 设置节点大小
 * 
 * @import get from .get scoped
 * 
 * @import tryLayout from ..layout.try scoped
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
    unsizedNodes
 } = me,
 node = get(id);

 if(node){

    node.width = width;

    node.height = height;

    let {
      size
    } = unsizedNodes ;

    unsizedNodes.delete(id) ;

    if(size && unsizedNodes.size === 0){

      me.fireEvent('nodesized') ;
    
    }else if(size === 0){

      tryLayout() ;
    }
 }
 