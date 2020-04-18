/**
 * 
 * 启用事件
 * 
 * @import on from browser.event.listener.global.add
 * 
 * @import onEnd from .end scoped
 * 
 * @import onMove from .move scoped
 * 
 */

 let me = this ;
 
 on('touchmove' , me.onMove = onMove) ;

 on('touchend' , me.onEnd = onEnd) ;