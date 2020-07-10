
/**
 * 
 * 计算右边坐标
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
