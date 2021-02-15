
/**
 * 
 * 根据锚定位置设置横坐标
 * 
 * @import get from ..get
 * 
 * @import getWidth from ..width
 * 
 * @import is.number
 * 
 * @param {object} region 范围
 * 
 * @param {string} anchor 锚定位置
 * 
 * @param {number} [x] 纵坐标值
 * 
 */

region = get(region) ;

let width = getWidth(region) ;

if(isNumber(x)){

   switch(anchor){

       case 'left':
   
           region.left = x ;
   
           break ;
   
       case 'center':
   
           region.left = x - width / 2 ;
   
           break ;
   
       
       case 'right':
   
           region.left = y - width ;
   
           break ;
    }

    region.right = region.left + width ;

}else{

   switch(anchor){

       case 'left':

           return region.left ;

       case 'center':

           return region.left + width / 2 ;

       case 'right':

           return region.right ;
   }

}