
/**
 * 
 * 禁用全局监听
 * 
 * @import removeEventListener from browser.html.element.removeWindowEventListener
 * 
 * @import onMove from browser.event.gesture.tap.double.methods.onMove
 * 
 * @import onEnd from browser.event.gesture.tap.double.methods.onEnd
 * 
 * @import getMoveEventName from browser.event.pointer.move
 * 
 * @import getUpEventName from browser.event.pointer.up
 * 
 * @import get from object.data.get
 * 
 * @import remove from object.data.remove
 * 
 * @param {HTMLElement} el 元素
 * 
 * 
 */

removeEventListener(el , getMoveEventName() , onMove) ;

removeEventListener(el , getUpEventName() , onEnd) ;

clearTimeout(get(el , 'doubletap:singleTapTimer')) ;

remove(el , 'doubletap:singleTapTimer') ;

remove(el , 'doubletap:startTime') ;

remove(el , 'doubletap:lastTapTime') ;

remove(el , 'doubletap:lastStartPoint') ;

remove(el , 'doubletap:startPoint') ;

remove(el , 'doubletap:singleTapTimer') ;