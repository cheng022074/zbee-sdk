
/**
 * 
 * 监听全局事件
 * 
 * @import onMove from browser.event.tap.move scoped
 * 
 * @import onEnd from browser.event.tap.end scoped
 * 
 * @import on from browser.global.listener.add
 * 
 */

 let me = this ;

 on('touchmove' ,  me.onMove = onMove) ;

 on('touchend' , me.onEnd = onEnd) ;

 