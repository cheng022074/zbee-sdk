
/**
 * 
 * 基于 JSX 的事件管理
 * 
 * @import capitalize from string.capitalize
 * 
 */

 const eventSuffixRe = /(?:start|move|end)$/,
 nameRe = /^(.+)(start|end)?$/,
 {
    keys
 } = Object;

 function getEventImplName(event){

    return event.replace(eventSuffixRe , '') ;
 }

 function isGestureImplName(event){

    try{

        include(include(`browser.event.gesture.${event}.start.name`)) ;

        return true ;

    }catch(err){

    }

    return false ;
 }

 function getGestureImplStartEventName(event){

    return include(include(`browser.event.gesture.${event}.start.name`))() ;
 }

 function getGestureImplStartEventListener(event , listeners){

    return include(`browser.event.gesture.${event}.start`).bind({
        dispatch(event , params){

            let property = getEventPropertyName(event) ;

            if(listeners.hasOwnProeprty(property)){

                listeners[property](params) ;
            }
        }
    });
}

function getEventPropertyName(event){

   switch(event){

        case 'pointerdown':

            return 'onPointerDown' ;

        case 'mousedown':

            return 'onMouseDown' ;

        case 'touchstart':

            return 'onTouchStart' ;
   }
}

function addListener(listeners , event , fn){

    let property = getEventPropertyName(event) ;

    if(listeners.hasOwnProeprty(property)){

        listeners[property] = (...args) =>{

            listeners[property](...args) ;

            fn(...args) ;
        } ;
    
    }else{

        listeners[property] = fn ;
    }
}

 function main(config = {}){

    let events = keys(config),
        listeners = {},
        gestureEvents = [];

    for(let event of events){

        let eventImpl = getEventImplName(event) ;

        if(isGestureImplName(eventImpl) && !gestureEvents.includes(eventImpl)){

            gestureEvents.push(eventImpl) ;

            addListener(listeners , getGestureImplStartEventName(eventImpl) , getGestureImplStartEventListener(eventImpl , listeners)) ;
        
        }else if(event === 'pointerdown' || event === 'mousedown' || event === 'touchstart'){

            addListener(listeners , event , config[event]) ;
        
        }else{

            throw new Error('仅支持 gesture、pointerdown、mousedown、touchstart 事件') ;
        }
    }

    return listeners ;
 }