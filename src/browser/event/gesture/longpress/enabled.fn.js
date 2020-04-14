/**
 * 
 * 启用事件
 * 
 * @import on from browser.event.listener.global.add
 * 
 * @import onEnd from .end scoped
 * 
 * @config minDuration from event.longpress...minDuration
 * 
 */

 let me = this ;

 me.timer = setTimeout(() => me.dispatch('longpress') , minDuration);

 on('touchend' , me.onEnd = onEnd) ;