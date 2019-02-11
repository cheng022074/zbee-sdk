
/**
 * 
 * 判断是否与矩形相交
 * 
 * 
 * @param {region.Rect} region 矩形区域
 * 
 * 
 * @return {boolean} 
 * 
 */

const {
    max,
    min,
    pow
} = Math ;

let {
     xy:circleXY,
     radius:circleRadius
} = this,
{
    left:rectLeft,
    top:rectTop,
    right:rectRight,
    bottom:rectBottom
} = region,
{
    x:circleX,
    y:circleY
} = circleXY,
deltaX = circleX - max(rectLeft , min(circleX , rectRight)),
deltaY = circleY - max(rectTop , min(circleY , rectBottom));

return (pow(deltaX , 2) + pow(deltaY , 2)) < pow(circleRadius , 2);