
/**
 * 
 * 根据给定的横坐标获取纵坐标
 * 
 * 
 * @param {number} x 横坐标
 * 
 * @param {boolean} [clockwise  = true] 是否顺时针
 * 
 * 
 * @return {number} 
 * 
 */

let {
    xy,
    radius
} = this,
{
    x:circleX,
    y:circleY
} = xy;

const {
    acos,
    sin,
    abs
} = Math ;

let value = acos(abs(x - circleX) / radius) ;

if(isNaN(value)){

    return false ;
}

value = sin(value) * radius ;

if(clockwise){

    return circleY - value ;
}

return circleY + value ; 
