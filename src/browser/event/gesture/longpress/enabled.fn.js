/**
 * 
 * 启用事件
 * 
 * @import getName from browser.event.name.single
 * 
 * @import on from browser.event.listener.global.add
 * 
 * @import onEnd from .end scoped
 * 
 * @import onMove from .move scoped
 * 
 * @param {Event} e 事件对象
 * 
 */

 let me = this ;
 
 on(getName('move' , e) , me.onMove = onMove) ;

 on(getName('end' , e) , me.onEnd = onEnd) ;