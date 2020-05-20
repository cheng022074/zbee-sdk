
/**
 * 
 * 设置节点大小
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
    visibilityNodes,
    waitInitSizeNodes
 } = me ;

 if(visibilityNodes.has(id)){

    let node = visibilityNodes.get(id) ;

    node.width = width;

    node.height = height;

    waitInitSizeNodes.delete(id) ;

    if(waitInitSizeNodes.size === 0){

         me.fireEvent('nodesized') ;
    }
 }
 