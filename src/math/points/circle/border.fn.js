
/**
 * 
 * 计算圆心坐标边上的一系列坐标集合
 * 
 * @import convert from math.degree2radian
 * 
 * @param {object} xy 圆形坐标
 * 
 * @param {number} xy.x 圆形横坐标
 * 
 * @param {number} xy.y 圆形纵坐标
 * 
 * @param {number} radius 圆的半径
 * 
 * @param {number} [startValue = 0] 起始度数值
 * 
 * @param {number} [step = 1] 圆边上一系列坐标间隔度数的步长
 * 
 * @return {array} 圆边上一系列坐标集合 
 * 
 */

const {
    sin,
    cos
} = Math ;

let points = [] ;

for(let degree = startValue ; degree <= 360 ; degree += step){

    let radian = convert(degree) ;

    points.push({
        degree,
        x:x + cos(radian) * radius,
        y:y + sin(radian) * radius
    }) ;
}

return points ;