
/**
 * 
 * 结束事件监听
 
 * @import prevent from browser.event.prevent
 * 
 * @import stop from browser.event.stop
 * 
 * @import un from browser.global.listener.remove
 * 
 * @param {Event} e 事件对象
 * 
 */

prevent(e) ;

stop(e) ;

let me = this ;

un('touchmove' , me.onMove) ;

un('touchend' , me.onEnd) ;

delete me.onStart ;

delete me.onMove ;

delete me.onEnd ;
