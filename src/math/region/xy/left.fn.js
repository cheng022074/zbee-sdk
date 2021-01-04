
/**
 * 
 * 计算左边坐标
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
    left
} = region ;

return {
    x:left,
    y:top + height(region) / 2
} ;
