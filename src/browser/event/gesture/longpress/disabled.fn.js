
/**
 * 
 * 取消监听全局事件
 * 
 * @import un from browser.event.listener.global.remove
 * 
 * @import getName from browser.event.name.single
 * 
 * @param {Event} e 事件对象
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

un(getName('move' , e) , onMove) ;

un(getName('end' , e) ,  onEnd) ;

delete me.onMove ;

delete me.onEnd ;

delete me.timer ;

delete me.startPoint ;