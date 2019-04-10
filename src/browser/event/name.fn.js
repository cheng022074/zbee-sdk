
/**
 * 
 * 获得事件的兼容名称
 * 
 * @import isPointer from browser.support.pointer
 * 
 * @import isTouch from browser.support.touch
 * 
 * @param {string} name 事件名称
 * 
 * @return {string} 对应事件的兼容名称 
 * 
 */

 function get_event_name(name){

    switch(name){

        case 'start':

            if(isPointer()){

                return 'pointerdown' ;

            }else if(isTouch()){

                return 'touchstart' ;
            }

            return 'mousedown' ;

        case 'move':

            if(isPointer()){

                return 'pointermove' ;

            }else if(isTouch()){

                return 'touchmove' ;
            }

            return 'mousemove' ;

        case 'end':

            if(isPointer()){

                return 'pointerup' ;

            }else if(isTouch()){

                return 'touchend' ;
            }

            return 'mouseup' ;
    }
 }

 function main(name){

    switch(name){

        case 'pointerdown':
        case 'touchstart':
        case 'mousedown':
    
            return get_event_name('start') ;
    
        case 'pointermove':
        case 'touchmove':
        case 'mousemove':
    
            return get_event_name('move') ;
    
        case 'pointerup':
        case 'touchend':
        case 'mousedup':
    
            return get_event_name('end') ;
    }

    return name ;
 }

 