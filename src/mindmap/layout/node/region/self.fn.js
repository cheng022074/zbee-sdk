
/**
 * 
 * 获得脑图节点自身范围
 * 
 * @import getLeftSpacing from ..spacing.left scoped
 * 
 * @import getRightSpacing from ..spacing.right scoped
 * 
 * @import getTopSpacing from ..spacing.top scoped
 * 
 * @import getBottomSpacing from ..spacing.bottom scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {object} 范围信息 
 * 
 */

 let {
    x,
    y,
    width,
    height
 } = node,
 top = y - getTopSpacing(node),
 left = x - getLeftSpacing(node);

 return {
     top,
     bottom:top + height + getBottomSpacing(node),
     left,
     right:left + width + getRightSpacing(node)
 } ;


