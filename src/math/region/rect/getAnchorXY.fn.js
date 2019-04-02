
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
            x,
            y:y + width / 2
        } ;
}