
/**
 * 
 * 监听全局事件
 * 
 * @import getName from browser.event.name.single
 * 
 * @import onMove from ..move scoped
 * 
 * @import onEnd from ..end scoped
 * 
 * @import onStart from ..start.global scoped
 * 
 * @import on from browser.event.listener.global.add
 * 
 */

 let me = this ;

 on(getName('start') , me.onStart = onStart) ;

 on(getName('move') ,  me.onMove = onMove) ;

 on(getName('end') , me.onEnd = onEnd) ;

 