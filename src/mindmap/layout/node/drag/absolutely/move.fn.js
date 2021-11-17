
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

x -= draggingOffsetXY.x

x -= x % 10 ;

y -= draggingOffsetXY.y

y -= y % 10 ;

let {
    x:oldX,
    y:oldY
} = draggingNode ;

draggingNode.x = x;

draggingNode.y = y;

return oldX !== x  || oldY !== y;
