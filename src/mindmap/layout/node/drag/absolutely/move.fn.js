
/**
 * 
 * 拖曳节点
 * 
 * @import from from mindmap.node.from scoped
 * 
 * @import setX from ....x scoped
 * 
 * @import setY from ....y scoped
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

setX(draggingNode , Math.max(x , 0) , false) ;

setY(draggingNode , Math.max(y , 0) , false) ;

return oldX !== draggingNode.x  || oldY !== draggingNode.y;
