
/**
 * 
 * 禁用监听全局事件
 * 
 * @import getName from browser.event.name.single
 * 
 * @import onMove from move.drag scoped
 * 
 * @import onEnd from .end scoped
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

un(getName('move') , onStart) ;

un(getName('move') ,  onMove) ;

un(getName('end') , onEnd) ;

delete me.onStart ;

delete me.onMove ;

delete me.onEnd ;

delete me.info ;

delete me.startTime ;

delete me.startPoint ;