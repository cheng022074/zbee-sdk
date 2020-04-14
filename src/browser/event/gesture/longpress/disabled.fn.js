
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
   timer
} = me;

if(timer){

    clearTimeout(timer) ;
}

un('touchend' ,  onEnd) ;

delete me.onEnd ;

delete me.timer ;