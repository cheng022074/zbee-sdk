
/**
 * 
 * 移动事件监听
 * 
 * @import getEvent from browser.event.pointer
 * 
 * @import cancel from browser.event.gesture.swipe.methods.cancel
 * 
 * @import get from object.data.get
 * 
 * @import set from object.data.set
 * 
 * @import dispatch from browser.event.dispatch
 * 
 * @import removeEventListener from browser.html.element.removeWindowEventListener
 * 
 * @import onMove from browser.event.gesture.swipe.methods.onMove
 * 
 * @import getMoveEventName from browser.event.pointer.move
 * 
 * @import supportTouch from browser.support.touch
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

if ((supportTouch() && (absDeltaX === 0 && absDeltaY === 0)) || (duration > maxDuration)) {

    return cancel(el , event , e) ;

}

if (isHorizontal && absDeltaY > maxOffset) {

    set(el , 'swipe:isHorizontal' , isHorizontal = false) ;
}

if (isVertical && absDeltaX > maxOffset) {

    set(el , 'swipe:isVertical' , isVertical = false) ;
}

if(!isHorizontal && !isVertical){

    return cancel(el , event , e) ;
}

if (!isVertical || !isHorizontal){

    if(isHorizontal && absDeltaX < minDistance) {

        direction = (deltaX < 0) ? 'left' : 'right';

        distance = absDeltaX;

    }else if(isVertical && absDeltaY < minDistance) {

        direction = (deltaY < 0) ? 'up' : 'down';
        
        distance = absDeltaY;
    }
}

if (direction) {
    
    removeEventListener(el , getMoveEventName() , onMove) ;

    dispatch(el , 'touch:swipestart' , {
        browserEvent:e,
        event,
        direction,
        distance,
        duration
    });
}