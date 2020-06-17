
/**
 * 
 * 取消监听全局事件
 * 
 * @import getName from browser.event.name.single
 * 
 * @import un from browser.event.listener.global.remove
 * 
 * @param {Event} e 事件对象
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

un(getName('move' , e) ,  onMove) ;

un(getName('end' , e) ,  onEnd) ;

delete me.timer ;

delete me.onMove ;

delete me.onEnd ;

delete me.startPoint ;

delete me.startTime ;

delete me.lastTarget ;

delete me.lastTapTime ;

