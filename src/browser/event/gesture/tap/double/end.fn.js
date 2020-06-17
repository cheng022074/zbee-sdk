
/**
 * 
 * 结束事件监听
 * 
 * @import getTouchEvents from browser.event.touches
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

if(getTouchEvents(e , 'end')){

    disabled(e) ;

    return ;
}

let me = this,
{
    pointerType,
    button
 } = e ;

 if(pointerType === 'mouse'){

    if(button !== 0){

        disabled(e) ;

        return ;
    }
 }

 let {
    startTime,
    lastTapTime,
    lastTarget,
    startPoint,
    dispatch
 } = me,
 nativeEvent = getEvent(e , 'end'),
 time = Date.now();

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

    disabled(e) ;

 }else if(time - startTime > maxDuration){
 
    dispatch('singletap' , {
        nativeEvent
    }) ;

    disabled(e) ;

 }else{

    me.lastTapTime = time ;

    me.lastTarget = nativeEvent.target ;

    me.timer = setTimeout(() => {

        dispatch('singletap' , {
            nativeEvent
        }) ;
    
        disabled(e) ;

    } , maxDuration) ;
 }

 