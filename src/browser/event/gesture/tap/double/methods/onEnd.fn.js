
/**
 * 
 * 结束事件监听
 * 
 * @import disabled from browser.event.gesture.tap.double.methods.disabled
 * 
 * @import dispatch from browser.event.dispatch
 * 
 * @import getEvent from browser.event.pointer
 * 
 * @import getDistance from math.point.distance
 * 
 * @import get from object.data.get
 * 
 * @import set from object.data.set
 * 
 * @import scale from browser.scale
 * 
 * @config maxDuration from gesture.doubletap...maxDuration
 * 
 * @config tapDistance from gesture.doubletap...tapDistance
 * 
 * @param {Event} e 事件对象
 * 
 */

e.preventDefault() ;



let el = this,
    event = getEvent(e),
    time = Date.now(),
    target = event.target,
    lastTapTime = get(el , 'doubletap:lastTapTime');

set(el , 'doubletap:lastTapTime' , time) ;

set(el , 'doubletap:lastTarget' , target) ;

if(lastTapTime){

    let duration = time - lastTapTime ;

    if(duration <= maxDuration){

        let distance = Math.round(Math.abs(getDistance({
            x:event.pageX,
            y:event.pageY
        } , get(el , 'doubletap:startPoint')) * scale())) ;

        if(distance <= tapDistance){

            if(target !== get(el , 'doubletap:lastTarget')){

                disabled(el) ;

                return ;
            }

            dispatch(el , 'touch:doubletap' , {
                browserEvent:e,
                event:getEvent(e)
            }) ;

            disabled(el) ;

            return ;
        }
    }
}

if(time - get(el , 'doubletap:startTime') > maxDuration){

    dispatch(el , 'touch:singletap' , {
        browserEvent:e,
        event:getEvent(e)
    }) ;

    disabled(el) ;

}else{

    set(el , 'doubletap:singleTapTimer' , setTimeout(() =>{

        dispatch(el , 'touch:singletap' , {
            browserEvent:e,
            event:getEvent(e)
        }) ;

        disabled(el) ;

    } , maxDuration)) ;
}