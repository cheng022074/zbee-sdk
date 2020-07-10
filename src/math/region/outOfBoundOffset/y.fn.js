
/**
 * 
 * 获取纵坐标超出范围的偏移植
 * 
 * @param {object} region 范围
 * 
 * @param {number} y 纵坐标 
 * 
 * @return {number} 偏移植
 * 
 */

let {
    top,
    bottom
} = region ;

if (y <= top) {

    return top - y;

}else if (y >= bottom) {

    return bottom - y;

}

return 0;