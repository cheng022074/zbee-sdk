
/**
 * 
 * 结束事件监听
 
 * @import prevent from browser.event.prevent
 * 
 * @import stop from browser.event.stop
 * 
 * @import un from browser.global.listener.remove
 * 
 * @import dispatch from ......dispatch
 * 
 * @param {Event} e 事件对象
 * 
 */

prevent(e) ;

stop(e) ;

let me = this,
{
    el,
    onMove,
    onEnd
} = me;

un('touchmove' , onMove) ;

un('touchend' , onEnd) ;

delete me.onStart ;

delete me.onMove ;

delete me.onEnd ;

delete me.startDistance ;

dispatch(el , 'gesture:pinchend') ;
