/**
 * 
 * 包含偏移
 * 
 * @import get from ....get
 * 
 * @import containsX from ....contains.x
 * 
 * @import setX from ....x.anchor
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

if(!containsX(region , position)){

    let {
        left,
        right
    } = region,
    {
        left:positionLeft,
        right:positionRight
    } = position;

    if(positionRight < left){

        setX(region , 'left' , positionLeft) ;

    }else if(positionLeft > right){

        setX(region , 'right' , positionRight) ;
    }

}

return 0 ;