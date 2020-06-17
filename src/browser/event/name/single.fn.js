
/**
 * 
 * 获取事件名称
 * 
 * @import isSupportPointer from is.browser.support.pointer
 * 
 * @import isSupportTouch from is.browser.support.touch
 * 
 * @param {string} name 事件名称
 * 
 * @param {PointerEvent} [e] 事件对象
 * 
 * @return {mixed} 返回说明 
 * 
 */

 let isTouch = isSupportTouch() ;

 if(e){

    let {
        pointerType,
        touches
    } = e;
    
    if(pointerType === 'touch' || touches){

        isTouch = true ;
    }
 }

if(isTouch){

    return `touch${name}` ;

}else{

    switch(name){

        case 'start':
    
            name = 'down' ;
    
            break ;
    
        case 'end':
    
            name = 'up' ;
    }
    
    if(isSupportPointer()){

        return `pointer${name}` ;
    }
    
    return `mouse${name}` ;
}

