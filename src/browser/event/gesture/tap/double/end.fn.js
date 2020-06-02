
/**
 * 
 * 结束事件监听
 * 
 * @import getEvent from browser.event.single
 * 
 * @import getDistance from math.point.distance
 * 
 * @import getScale from browser.scale
 * 
 * @import disabled from .disabled scoped
 * 
 * @import stop from browser.event.stop
 * 
 * @config maxDuration from event.tap.double...maxDuration
 * 
 * @config tapDistance from event.tap.double...tapDistance
 * 
 * @param {Event} e 事件对象
 * 
 */

let {
    pointerType,
    button
 } = e ;

 if(pointerType === 'mouse'){

    if(button !== 0){

        disabled() ;

        return ;
    }
 }

 let me = this,
 {
    startTime,
    lastTapTime,
    lastTarget,
    startPoint,
    dispatch,
    timer
 } = me,
 nativeEvent = getEvent(e , 'end'),
 time = Date.now();

 if(timer){

    clearTimeout(timer) ;
 }

 if(lastTapTime){

    if(time - lastTapTime <= maxDuration){

        let {
            pageX,
            pageY
        } = nativeEvent;

        if(Math.round(getDistance({
            x:pageX,
            y:pageY
        } , startPoint)) * getScale() <= tapDistance){

            if(nativeEvent.target === lastTarget){

                dispatch('doubletap' , {
                    nativeEvent
                }) ;
            }
        
        }

    }

    disabled() ;

 }else if(time - startTime > maxDuration){
 
    dispatch('singletap' , {
        nativeEvent
    }) ;

    disabled() ;

 }else{

    me.lastTapTime = Date.now() ;

    me.lastTarget = nativeEvent.target ;

    me.timer = setTimeout(() => {

        dispatch('singletap' , {
            nativeEvent
        }) ;
    
        disabled() ;

    } , maxDuration - (time - startTime)) ;
 }

 