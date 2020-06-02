
/**
 * 
 * 取消监听全局事件
 * 
 * @import getName from browser.event.name.single
 * 
 * @import un from browser.event.listener.global.remove
 * 
 */

let me = this,
{
   onMove,
   onEnd,
   timer
} = me;

if(timer){

  clearTimeout(timer) ;
}

un(getName('move') ,  onMove) ;

un(getName('end') ,  onEnd) ;

delete me.timer ;

delete me.onMove ;

delete me.onEnd ;

delete me.lastTarget ;

delete me.lastTapTime ;

