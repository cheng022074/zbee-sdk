
/**
 * 
 * 监听全局事件
 * 
 * @import getName from browser.event.name.single
 * 
 * @import onMove from .move scoped
 * 
 * @import onEnd from .end scoped
 * 
 * @import on from browser.event.listener.global.add
 * 
 * @param {Event} e 事件对象
 * 
 */

 let me = this ;

 on(getName('move' , e) ,  me.onMove = onMove) ;

 on(getName('end' , e) , me.onEnd = onEnd) ;

 