
/**
 * 
 * 计算右边坐标
 * 
 * @import getTop from ..top
 * 
 * @import getBottom from ..bottom
 * 
 * @import getLeft from ..left
 * 
 * @import getRight from ..right
 * 
 * @param {object} region 配置
 * 
 * @return {object} 坐标 
 * 
 */

let {
    right,
    top,
    bottom
} = region ;

return {
    x:right,
    y:top + (bottom - top) / 2
} ;
