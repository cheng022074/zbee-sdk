
/**
 * 
 * 启用监听全局事件
 * 
 * @import getName from browser.event.name.single
 * 
 * @import onMove from .move.drag scoped
 * 
 * @import onEnd from ..end scoped
 * 
 * @import on from browser.event.listener.global.add
 * 
 */

let me = this ;

on(getName('move') ,  me.onMove = onMove) ;

on(getName('end') , me.onEnd = onEnd) ;
