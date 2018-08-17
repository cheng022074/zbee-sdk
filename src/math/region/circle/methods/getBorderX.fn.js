
/**
 * 
 * 根据给定的纵坐标获取横坐标
 * 
 * 
 * @param {number} y 纵坐标
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
    asin,
    cos,
    abs
} = Math ;

let value = asin(abs(y - circleY) / radius) ;

if(isNaN(value)){

    return false ;
}

value = cos(value) * radius ;

if(clockwise){

    return circleX - value ;
}

return circleX + value ; 
