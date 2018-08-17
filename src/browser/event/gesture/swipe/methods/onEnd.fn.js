
/**
 * 
 * 结束事件监听
 * 
 * @import cancel from browser.event.gesture.swipe.methods.cancel
 * 
 * @import disabled from browser.event.gesture.swipe.methods.disabled
 * 
 * @import dispatch from browser.event.dispatch
 * 
 * @import getEvent from browser.event.pointer
 * 
 * @import get from object.data.get
 * 
 * @import set from object.data.set
 * 
 * @config maxDuration from gesture.swipe...maxDuration
 * 
 * @config moveDistance from gesture.swipe...moveDistance
 * 
 * @config minDistance from gesture.swipe...minDistance
 * 
 * @config maxOffset from gesture.swipe...maxOffset
 * 
 * @param {Event} e 事件对象
 * 
 */

e.preventDefault() ;

let el = this,
    event = getEvent(e),
    x = event.pageX,
    y = event.pageY,
    deltaX = x - get(el , 'swipe:startX'),
    deltaY = y - get(el , 'swipe:startY'),
    absDeltaX = Math.abs(deltaX),
    absDeltaY = Math.abs(deltaY),
    duration = Date.now() - get(el , 'swipe:startTime'),
    isHorizontal = get(el , 'swipe:isHorizontal'),
    isVertical = get(el , 'swipe:isVertical'),
    direction,
    distance;


if(isVertical && absDeltaY < minDistance){

    set(el , 'swipe:isVertical' , isVertical = false) ;
}

if(isHorizontal && absDeltaX < minDistance){

    set(el , 'swipe:isHorizontal' , isHorizontal = false) ;
}

if(isHorizontal){

    direction = (deltaX < 0) ? 'left' : 'right';

    distance = absDeltaX;

}else if(isVertical){

    direction = (deltaY < 0) ? 'up' : 'down';
    
    distance = absDeltaY;
}

if(!isHorizontal && !isVertical){

    return cancel(el , event , e) ;
}

disabled(el) ;

dispatch(el , 'touch:swipe' , {
    browserEvent:e,
    event,
    direction,
    distance,
    duration
});