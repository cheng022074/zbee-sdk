
/**
 * 
 * 平移
 * 
 * @import width from .width
 * 
 * @import height from .height
 * 
 * @param {object} target 目标范围
 * 
 * @param {object} xy 坐标
 * 
 * @param {number} [xy.x] 横坐标
 * 
 * @param {number} [xy.y] 纵坐标
 * 
 */

let {
    left,
    right,
    top,
    bottom
 } = target;

if(x){

    left = x ;

    right = left + width(target) ;
}

if(y){

    top = y ;

    bottom = top + height(target) ;
}

return {
    left,
    right,
    top,
    bottom
} ;