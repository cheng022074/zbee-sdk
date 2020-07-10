
/**
 * 
 * 获取横坐标超出范围的偏移植
 * 
 * @param {object} region 范围
 * 
 * @param {number} x 横坐标 
 * 
 * @return {number} 偏移植
 * 
 */

let {
   left,
   right
} = region;

if (x <= left) {

   return left - x;

}else if (x >= right) {

   return right - x;

}

return 0;