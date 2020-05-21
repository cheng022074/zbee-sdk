
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
    visibilityNodes,
    width:mindmapWidth,
    height:mindmapHeight
} = me;

width -= 1 ;

height -= 1 ;

if(mindmapWidth !== width || mindmapHeight !== height){

    me.width = width;

    me.height = height;

    me.isRegionChange = true ;

    me.fireEvent('draw' , nodes(visibilityNodes.values()) , getRegion()) ;
}