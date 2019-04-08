
/**
 * 
 * 计算当前区域锚点坐标
 * 
 * @param {string} [anchor = 'tl'] 锚点信息
 * 
 * @return {object} 坐标值 
 * 
 */

 let {
     x,
     y,
     width,
     height
 } = this ;

switch(anchor){

    case 'tl':

        return {
            x,
            y
        } ;

    case 'r':

        return {
            x:x + width,
            y:y + height / 2
        } ;

    case 'l':

        return {
            x,
            y:y + height / 2
        } ;

    case 't':

        return {
            x:x + width / 2,
            y 
        } ;

    case 'b':

        return {
            x:x + width / 2,
            y:y + height
        }
}