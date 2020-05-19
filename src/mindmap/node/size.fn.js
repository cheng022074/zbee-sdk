
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

 let {
    visibilityNodes
 } = this ;

 if(visibilityNodes.has(id)){

    let node = visibilityNodes.get(id) ;

    node.width = width;

    node.height = height;
 }
 