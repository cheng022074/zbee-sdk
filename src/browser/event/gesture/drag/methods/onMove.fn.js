
/**
 * 
 * 移动事件监听
 * 
 * @import set from object.data.set
 * 
 * @import get from object.data.get
 * 
 * @import getEvent from browser.event.pointer
 * 
 * @import scale from browser.scale
 * 
 * @import resetInfo from browser.event.gesture.drag.methods.resetInfo
 * 
 * @import getMoveEventName from browser.event.pointer.move
 * 
 * @import getEndEventName from browser.event.pointer.up
 * 
 * @config minDistance from gesture.drag...minDistance
 * 
 * @import addEventListener from browser.html.element.addWindowEventListener
 * 
 * @import removeEventListener from browser.html.element.removeWindowEventListener
 * 
 * @import onMove from browser.event.gesture.drag.methods.onMove
 * 
 * @import onDragMove from browser.event.gesture.drag.methods.onDragMove
 * 
 * @import onEnd from browser.event.gesture.drag.methods.onEnd
 * 
 * @import distance from math.point.distance
 * 
 * @import dispatch from browser.event.dispatch
 * 
 * @param {Event} e 事件对象
 * 
 */


e.preventDefault() ;

let event = getEvent(e , true),
    el = this,
    info = get(el , 'drag:info'),
    point = {
        x:event.pageX,
        y:event.pageY
    };

if (Math.round(distance(get(el , 'drag:startPoint') , point) * scale()) >= minDistance) {

    set(el , 'drag:previousPoint' , point) ;

    set(el , 'drag:lastPoint' , point) ;

    resetInfo(el , 'x');
    
    resetInfo(el , 'y');

    info.time = Date.now();

    dispatch(el , 'touch:dragstart', {
        browserEvent:e,
        event,
        info
    });

    let moveEventName = getMoveEventName() ;

    removeEventListener(el , moveEventName , onMove) ;

    addEventListener(el , moveEventName , onDragMove) ;

    addEventListener(el , getEndEventName() , onEnd);
}  