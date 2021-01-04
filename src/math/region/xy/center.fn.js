
/**
 * 
 * 计算中心点坐标
 * 
 * @import get from .get
 * 
 * @import from from .from
 * 
 * @import getWidth from ..width
 * 
 * @import getHeight from ..height
 * 
 * @param {object} region 方位信息
 * 
 * @param {object} [xy] 需要设置的中心坐标
 * 
 * @return {mixed} 坐标或者范围本身 
 * 
 */

 region = get(region) ;

let {
    left,
    top
} = region,
width = getWidth(region),
height = getHeight(region);

 if(!xy){

    return {
        x:left + width / 2,
        y:top + height / 2
    } ;

 }

let {
    x,
    y
} = xy ;

return from({
    x:x - width / 2,
    y:y - height / 2,
    width,
    height
}) ;

