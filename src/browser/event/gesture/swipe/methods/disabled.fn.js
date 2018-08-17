
/**
 * 
 * 禁用全局监听
 * 
 * @import removeEventListener from browser.html.element.removeWindowEventListener
 * 
 * @import onMove from browser.event.gesture.swipe.methods.onMove
 * 
 * @import onEnd from browser.event.gesture.swipe.methods.onEnd
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

remove(el , 'swipe:startTime') ;

remove(el , 'swipe:isHorizontal') ;

remove(el , 'swipe:isVertical') ;

remove(el , 'swipe:startX') ;

remove(el , 'swipe:startY') ;