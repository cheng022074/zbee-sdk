/**
 * 
 * 包含偏移
 * 
 * @import getWidth from ....width
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

    if(getWidth(region) >= getWidth(position)){

        if(positionLeft < left){

            setX(region , 'left' , positionLeft) ;
    
            return -1 ;
    
        }
    }

    if(positionRight > right){
    
        setX(region , 'right' , positionRight) ;

        return 1 ;
    }
}

return 0 ;