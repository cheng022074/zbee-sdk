
/**
 * 
 * 计算右边坐标
 * 
 * @import get from ..get
 * 
 * @import height from ..height
 * 
 * @param {object} region 配置
 * 
 * @return {object} 坐标 
 * 
 */

region = get(region) ;

let {
    right
} = region ;

return {
    x:right,
    y:top + height(region) / 2
} ;
