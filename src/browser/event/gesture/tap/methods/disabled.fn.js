
/**
 * 
 * 禁用全局监听
 * 
 * @import removeEventListener from browser.html.element.removeWindowEventListener
 * 
 * @import onMove from browser.event.gesture.tap.methods.onMove
 * 
 * @import onEnd from browser.event.gesture.tap.methods.onEnd
 * 
 * @import getMoveEventName from browser.event.pointer.move
 * 
 * @import getUpEventName from browser.event.pointer.up
 * 
 * @import get from object.data.get
 * 
 * @import remove from object.data.remove
 * 
 * @import tap from browser.event.gesture.tap
 * 
 * @param {HTMLElement} el 元素
 * 
 * 
 */

removeEventListener(el , getMoveEventName() , onMove) ;

removeEventListener(el , getUpEventName() , onEnd) ;

clearTimeout(get(el , 'tap:deferTimer')) ;

remove(el , 'tap:deferTimer') ;

remove(el , 'tap:startPoint') ;

tap.locked = false ;