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
 * @import getHeight from ....height
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

    if(getHeight(position) > getHeight(region)){

        if(positionBototm > bottom){
    
            setY(region , 'bottom' , positionBototm) ;
    
            return 1 ;
        }


    }else{

        if(positionTop < top){

            setY(region , 'top' , positionTop) ;
    
            return -1 ;
    
        }else if(positionBototm > bottom){
    
            setY(region , 'bottom' , positionBototm) ;
    
            return 1 ;
        }
    }

    

}

return 0 ;