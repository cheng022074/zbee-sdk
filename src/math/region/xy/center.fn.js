
/**
 * 
 * 计算中心点坐标
 * 
 * @param {object} region 方位信息
 * 
 * @param {object} [xy] 需要设置的中心坐标
 * 
 * @return {object} 坐标 
 * 
 */

let {
    left,
    right,
    top,
    bottom
} = region ;

 if(!xy){

    return {
        x:left + (right - left) / 2,
        y:top + (bottom - top) / 2
    } ;

 }

 let {
    x,
    y
} = xy ;

region.left = x - (right - left) / 2 ;

region.top = y - (bottom - top) / 2 ;
