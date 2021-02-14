
/**
 * 
 * 根据锚定位置设置纵坐标
 * 
 * @import getHeight from ..height
 * 
 * @param {object} region 范围
 * 
 * @param {number} y 纵坐标值
 * 
 * @param {string} [anchor='top'] 锚定位置
 * 
 */

 switch(anchor){

    case 'top':

        region.top = y ;

        break ;

    case 'center':

        region.top = y - getHeight(region) / 2 ;

        break ;

    
    case 'bottom':

        region.top = y - getHeight(region) ;

        break ;
 }