
/**
 * 
 * 基于 JSX 的事件管理
 * 
 * @import capitalize from string.capitalize
 * 
 * @param {object} config 未经识别的事件集合
 * 
 * @return {object} 已识别事件属性集合
 * 
 */

 const eventSuffixRe = /(?:start|end)$/,
 eventPropertyRe = /^on/,
 {
    keys
 } = Object;

 function getEventImplName(event){

    return event.replace(eventSuffixRe , '') ;
 }

 function isGestureImplName(event){

    try{

        include(`browser.event.gesture.${event}.start.name`) ;

        return true ;

    }catch(err){

    }

    return false ;
 }

 function getGestureImplStartEventName(event){

    console.log(include(`browser.event.gesture.${event}.start.name`)()) ;

    switch(include(`browser.event.gesture.${event}.start.name`)()){

        case 'pointerdown':

            return 'onPointerDown' ;

        case 'mousedown':

            return 'onMouseDown' ;

        case 'touchstart':

            return 'onTouchStart' ;
   }

 }

 function getGestureImplStartEventListener(event , listeners){

    return include(`browser.event.gesture.${event}.start`).bind({
        dispatch(event , params){

            if(listeners.hasOwnProperty(event)){

                listeners[event](params) ;
            }
        }
    });
}

function addListener(listeners , event , fn){

    if(listeners.hasOwnProperty(event)){

        listeners[event] = (...args) =>{

            listeners[event](...args) ;

            fn(...args) ;
        } ;
    
    }else{

        listeners[event] = fn ;
    }
}

function getEventProperties(listeners){

    let events = keys(listeners),
        properties = {};

    for(let event of events){

        if(eventPropertyRe.test(event)){

            properties[event] = listeners[event];
        }
    }

    return properties ;
}

 function main(config){

    let events = keys(config),
        listeners = {},
        gestureEvents = [];

    for(let event of events){

        let eventImpl = getEventImplName(event) ;

        if(isGestureImplName(eventImpl) && !gestureEvents.includes(eventImpl)){

            gestureEvents.push(eventImpl) ;

            addListener(listeners , getGestureImplStartEventName(eventImpl) , getGestureImplStartEventListener(eventImpl , listeners)) ;
        
        }

        addListener(listeners , event , config[event]) ;
    }

    return getEventProperties(listeners) ;
 }