
/**
 * 
 * 重新计算大小
 * 
 * @import nodes from .nodes scoped
 * 
 * @import getSize from .size scoped
 * 
 * @param {number} width 宽度
 * 
 * @param {number} height 高度
 * 
 */
let me = this,
{
    visibilityNodes
} = me;

me.width = width - 1;

me.height = height - 1;

me.fireEvent('draw' , nodes(visibilityNodes.values()) , getSize()) ;