
/**
 * 
 * 结束事件监听
 * 
 * @import get from object.data.get
 * 
 * @import set from object.data.set
 * 
 * @import remove from object.data.remove
 * 
 * @import getEvent from browser.event.pointer
 * 
 * @import updateInfo from browser.event.gesture.drag.methods.updateInfo
 * 
 * @import onAxisDragEnd from browser.event.gesture.drag.methods.onAxisDragEnd
 * 
 * @import getMoveEventName from browser.event.pointer.move
 * 
 * @import getEndEventName from browser.event.pointer.up
 * 
 * @import onDragMove from browser.event.gesture.drag.methods.onDragMove
 * 
 * @import onEnd from browser.event.gesture.drag.methods.onEnd
 * 
 * @import dispatch from browser.event.dispatch
 * 
 * @import removeEventListener from browser.html.element.removeWindowEventListener
 * 
 * @param {Event} e 事件对象
 * 
 */

e.preventDefault() ;

let el = this,
    event = getEvent(e),
    info = get(el , 'drag:info');

set(el , 'drag:lastPoint' , {
    x:event.pageX,
    y:event.pageY
}) ;

updateInfo(el , 'x');

updateInfo(el , 'y');

info.time = Date.now();

onAxisDragEnd('x', info);

onAxisDragEnd('y', info);

dispatch(el , 'touch:dragend', {
    event,
    browserEvent:e,
    info
});

removeEventListener(el , getMoveEventName() , onDragMove),
removeEventListener(el , getEndEventName() , onEnd) ;

remove(el , 'drag:info') ;

remove(el , 'drag:lastPoint') ;

remove(el , 'drag:previousPoint') ;

remove(el , 'drag:startTime') ;

remove(el , 'drag:startPoint') ;