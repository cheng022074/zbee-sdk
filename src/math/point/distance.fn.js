/**
 * 
 * 计算两点之间的距离
 * 
 * @param {object} point1 第一个点的位置
 * 
 * @param {object} point2 第二个点的位置
 * 
 * @param {number} 两点之间的距离
 * 
 */

const {
    pow,
    sqrt
} = Math ;

return sqrt(pow(point1.x - point2.x , 2) + pow(point1.y - point2.y , 2) , 2);