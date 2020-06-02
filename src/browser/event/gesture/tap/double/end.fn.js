
/**
 * 
 * 结束事件监听
 * 
 * @import getEvent from browser.event.single
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
    lastTarget
 } = me,
 nativeEvent = getEvent(e , 'end');

 if(lastTapTime){

    let {
        startPoint,
        dispatch
    } = me ;

    if(Date.now() - lastTapTime <= maxDuration){

        let {
            pageX,
            pageY
        } = nativeEvent;

        if(Math.round(getDistance({
            x:pageX,
            y:pageY
        } , startPoint)) * getScale() >= tapDistance){

            if(nativeEvent.target === lastTarget){

                dispatch('doubletap' , {
                    nativeEvent
                }) ;
            }
        
        }

    }else{

        dispatch('singletap' , {
            nativeEvent
        }) ;
    }

    disabled() ;

 }else if(Date.now() - startTime > maxDuration){
 
    dispatch('singletap' , {
        nativeEvent
    }) ;

    disabled() ;

 }else{

    me.lastTapTime = Date.now() ;

    me.lastTarget = nativeEvent.target ;
 }

 