
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

                return 'onPointerDown' ;

            }else if(isTouch()){

                return 'onTouchStart' ;
            }

            return 'onMouseDown' ;

        case 'move':

            if(isPointer()){

                return 'onPointerMove' ;

            }else if(isTouch()){

                return 'onTouchMove' ;
            }

            return 'onMouseMove' ;

        case 'end':

            if(isPointer()){

                return 'onPointerUp' ;

            }else if(isTouch()){

                return 'onTouchEnd' ;
            }

            return 'onMouseUp' ;
    }
 }

 function main(name){

    switch(name){

        case 'onPointerDown':
        case 'onTouchStart':
        case 'onMousedown':
    
            return get_event_name('start') ;
    
        case 'onPointerMove':
        case 'onTouchMove':
        case 'onMouseMove':
    
            return get_event_name('move') ;
    
        case 'onPointerUp':
        case 'onTouchEnd':
        case 'onMousedUp':
    
            return get_event_name('end') ;
    }

    return name ;
 }

 