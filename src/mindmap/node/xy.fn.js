
/**
 * 
 * 设置节点位置
 * 
 * @param {string} id 编号
 * 
 * @param {number} x 横坐标
 * 
 * @param {number} y 纵坐标
 * 
 */

let {
    visibilityNodes
 } = this ;

 if(visibilityNodes.has(id)){

    let node = visibilityNodes.get(id) ;

    node.x = x;

    node.y = y;
 }
 