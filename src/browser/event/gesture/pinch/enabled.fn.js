/**
 * 
 * 启用事件
 * 
 * @import on from browser.event.listener.global.add
 * 
 * @import onMove from .move.start scoped
 * 
 * @import onEnd from .end scoped
 * 
 */

 let me = this ;

on('touchmove' , me.onStart = onMove) ;

on('touchend' , me.onEnd = onEnd) ;