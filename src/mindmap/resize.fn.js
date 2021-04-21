
/**
 * 
 * 重新计算大小
 * 
 * @import layout from .layout scoped
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

if(mindmapWidth !== width || mindmapHeight !== height){

    me.width = width;

    me.height = height;

    layout() ;

    return true ;
}

return false ;