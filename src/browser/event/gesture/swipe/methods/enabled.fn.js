
/**
 * 
 * 启动全局监听
 * 
 * @import addEventListener from browser.html.element.addWindowEventListener
 * 
 * @import onMove from browser.event.gesture.swipe.methods.onMove
 * 
 * @import onEnd from browser.event.gesture.swipe.methods.onEnd
 * 
 * @import getMoveEventName from browser.event.pointer.move
 * 
 * @import getUpEventName from browser.event.pointer.up
 * 
 * @param {HTMLElement} el 元素
 * 
 * 
 */

addEventListener(el , getMoveEventName() , onMove) ;

addEventListener(el , getUpEventName() , onEnd) ;