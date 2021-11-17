
/**
 * 
 * 拖曳节点
 * 
 * @import from from mindmap.node.from scoped
 * 
 * @param {object} node 节点
 * 
 * @param {object} xy 坐标
 * 
 * @param {number} xy.x 横坐标
 * 
 * @param {number} xy.y 纵坐标
 * 
 */

let {
    draggingNode,
    draggingOffsetXY
} = this ;

draggingNode.x = x - draggingOffsetXY.x;

draggingNode.y = y - draggingOffsetXY.y;

return true ;
