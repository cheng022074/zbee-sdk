
/**
 * 
 * 重新计算大小
 * 
 * @import fireDrawEvent from .fire.draw scoped
 * 
 * @param {number} width 宽度
 * 
 * @param {number} height 高度
 * 
 */
let me = this,
{
    width:mindmapWidth,
    height:mindmapHeight
} = me;

width -= 1 ;

height -= 1 ;

if(mindmapWidth !== width || mindmapHeight !== height){

    me.width = width;

    me.height = height;

    me.isRegionChange = true ;

    fireDrawEvent() ;
}