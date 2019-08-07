/**
 * 
 * 禁用事件
 * 
 * @import un from browser.event.listener.global.remove
 * 
 */

let me = this,
{
    onStart,
    onMove,
    onEnd
} = me;

un('touchmove' , onStart) ;

un('touchmove' , onMove) ;

un('touchend' , onEnd) ;

delete me.onStart ;

delete me.onMove ;

delete me.onEnd ;

delete me.startDistance ;
