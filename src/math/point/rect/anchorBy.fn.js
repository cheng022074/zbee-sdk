
/**
 * 
 * 根据方位的坐标推算出真正的坐标
 * 
 * @param {object} xy 坐标
 * 
 * @param {number} xy.x 横坐标
 * 
 * @param {number} xy.y 纵坐标
 * 
 * @param {object} size 尺寸
 * 
 * @param {number} size.width 宽度
 * 
 * @param {number} size.height 高度
 * 
 * @param {string} [anchor='tl'] 方位
 * 
 * @return {object} 坐标
 * 
 */

switch(anchor){

    case 'tl':

        return {
            x,
            y
        } ;

    case 't':

        return {
            x:x - width / 2,
            y 
        } ;

    case 'tr':

        return {
            x: x - width,
            y
        } ;

    case 'r':

        return {
            x: x - width,
            y: y - height / 2
        } ;

    case 'br':

        return {
            x: x - width,
            y : y - height
        } ;

    case 'b':

        return {
            x: x - width / 2,
            y: y - height
        } ;

    case 'bl':

        return {
            x,
            y: y - height
        } ;

    case 'l':

        return {
            x,
            y: y - height / 2
        } ;

    case 'c':

        return {
            x : x - width / 2,
            y: y - height / 2
        } ;
}