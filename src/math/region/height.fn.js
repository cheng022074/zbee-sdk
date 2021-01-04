
/**
 * 
 * 获得方位高度
 * 
 * @import get from .get
 * 
 * @param {object} region 范围
 * 
 * @return {number} 宽度值 
 * 
 */

 let {
    bottom,
    top
 } = get(region) ;

return bottom - top ;