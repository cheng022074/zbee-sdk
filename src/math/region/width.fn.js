
/**
 * 
 * 获得方位高度
 * 
 * @import get from .get
 * 
 * @param {object} region 范围
 * 
 * @return {number} 高度值 
 * 
 */

 let {
    right,
    left
 } = get(region) ;

 return right - left ;