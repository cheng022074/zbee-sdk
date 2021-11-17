
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
    draggingOffsetXY,
    layoutConfig
} = this,
{
    nodeVerticalSeparationDistance
} = layoutConfig;

x -= draggingOffsetXY.x

x -= x % nodeVerticalSeparationDistance ;

y -= draggingOffsetXY.y

y -= y % nodeVerticalSeparationDistance ;

let {
    x:oldX,
    y:oldY
} = draggingNode ;

draggingNode.x = x;

draggingNode.y = y;

return oldX !== x  || oldY !== y;
