
/**
 * 
 * 获取超出边界的纵坐标偏移量
 * 
 * @param {object} region 区域
 * 
 * @param {number} y 纵坐标
 * 
 * @return {number} 纵坐标偏移量 
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