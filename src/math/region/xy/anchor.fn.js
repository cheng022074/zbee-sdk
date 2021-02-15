
/**
 * 
 * 计算中心点坐标
 * 
 * @import is.defined
 * 
 * @import doAnchorX from ..x.anchor
 * 
 * @import doAnchorY from ..y.anchor
 * 
 * @import get from ..get
 * 
 * @param {object} region 方位信息
 * 
 * @param {string} anchor 锚定位置
 * 
 * @param {object} [xy] 需要设置的中心坐标
 * 
 */

 region = get(region) ;

 let anchorX,
     anchorY ;

 switch(anchor){

    case 'tl':

        anchorX = 'left' ;

        anchorY = 'top' ;

        break ;

    case 'tr':

        anchorX = 'right' ;

        anchorY = 'top' ;

        break ;

    case 'br':

        anchorX = 'right' ;

        anchorY = 'bottom' ;

        break ;

    case 'bl':

        anchorX = 'left' ;

        anchorY = 'bottom' ;

        break ;

    case 't':

        anchorX = 'center' ;

        anchorY = 'top' ;

        break ;

    case 'b':

        anchorX = 'center' ;

        anchorY = 'bottom' ;

        break ;

    case 'c':

        anchorX = 'center' ;

        anchorY = 'center' ;

        break ;

    case 'l':

        anchorX = 'left' ;

        anchorY = 'center' ;

        break ;

    case 'r':

        anchorX = 'right' ;

        anchorY = 'center' ;


 }

 if(isDefined(xy)){

    doAnchorX(region , anchorX , xy.x) ;

    doAnchorY(region , anchorY , xy.y) ;
 
}else{

    return {
        x:doAnchorX(region , anchorX),
        y:doAnchorY(region , anchorY)
    }

}

