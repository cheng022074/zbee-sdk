
/**
 * 
 * 取消监听全局事件
 * 
 * @import un from browser.global.listener.remove
 * 
 */

 let me = this,
 {
    onMove,
    onEnd
 } = me;

 un('touchmove' ,  onMove) ;

 un('touchend' ,  onEnd) ;

 delete me.onMove ;

 delete me.onEnd ;

 