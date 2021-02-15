
/**
 * 
 * 根据锚定位置设置纵坐标
 * 
 * @import get from ..get
 * 
 * @import getHeight from ..height
 * 
 * @import is.number
 * 
 * @param {object} region 范围
 * 
 * @param {string} anchor 锚定位置
 * 
 * @param {number} [y] 纵坐标值
 * 
 */

 region = get(region) ;

 let height = getHeight(region) ;

 if(isNumber(y)){

    switch(anchor){

        case 'top':
    
            region.top = y ;
    
            break ;
    
        case 'center':
    
            region.top = y - height / 2 ;
    
            break ;
    
        
        case 'bottom':
    
            region.top = y - height ;
    
            break ;
     }

     region.bottom = region.top + height ;
 
}else{

    switch(anchor){

        case 'top':

            return region.top ;

        case 'center':

            return region.top + height / 2 ;

        case 'bottom':

            return region.bottom ;
    }

 }