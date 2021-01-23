
/**
 * 
 * 平移
 * 
 * @import width from .width
 * 
 * @import height from .height
 * 
 * @import get from .get
 * 
 * @param {object} region 目标范围
 * 
 * @param {object} xy 坐标
 * 
 * @param {number} [xy.x] 横坐标
 * 
 * @param {number} [xy.y] 纵坐标
 * 
 */

 region = get(region) ;

let {
    left,
    right,
    top,
    bottom
 } = region;

if(x){

    left = x ;

    right = left + width(region) ;
}

if(y){

    top = y ;

    bottom = top + height(region) ;
}

return {
    left,
    right,
    top,
    bottom
} ;