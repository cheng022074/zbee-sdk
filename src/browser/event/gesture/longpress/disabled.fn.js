
/**
 * 
 * 取消监听全局事件
 * 
 * @import un from browser.event.listener.global.remove
 * 
 */

let me = this,
{
   onEnd,
   onMove,
   timer
} = me;

if(timer){

    clearTimeout(timer) ;
}

un('touchmove' , onMove) ;

un('touchend' ,  onEnd) ;

delete me.onMove ;

delete me.onEnd ;

delete me.timer ;