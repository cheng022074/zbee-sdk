
/**
 * 
 * 重新计算大小
 * 
 * @import nodes from .nodes scoped
 * 
 * @import getRegion from .region scoped
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

me.isRegionChange = true ;

me.fireEvent('draw' , nodes(visibilityNodes.values()) , getRegion()) ;