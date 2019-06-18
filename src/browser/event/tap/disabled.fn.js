
/**
 * 
 * 取消监听全局事件
 * 
 * @import getName from browser.event.name.single
 * 
 * @import un from browser.global.listener.remove
 * 
 */

 let me = this,
 {
    onStart,
    onMove,
    onEnd
 } = me;

 un(getName('start') , onStart) ;

 un(getName('move') ,  onMove) ;

 un(getName('end') ,  onEnd) ;

 delete me.onStart ;

 delete me.onMove ;

 delete me.onEnd ;

 