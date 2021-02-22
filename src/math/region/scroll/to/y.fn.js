/**
 * 
 * 包含偏移
 * 
 * @import get from ....get
 * 
 * @import containsY from ....contains.y
 * 
 * @import setY from ....y.anchor
 * 
 * @param {mixed} region 范围
 * 
 * @param {mixed} position 位置
 * 
 * @return {number}
 * 
 */

region = get(region) ;

position = get(position) ;

if(!containsY(region , position)){

    let {
        top,
        bottom
    } = region,
    {
        top:positionTop,
        bottom:positionBototm
    } = position;

    if(positionTop < top){

        setY(region , 'top' , positionTop) ;

    }else if(positionBototm > bottom){

        setY(region , 'bottom' , positionBototm) ;
    }

}

return 0 ;