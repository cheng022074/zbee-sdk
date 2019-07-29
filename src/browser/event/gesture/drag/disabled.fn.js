
/**
 * 
 * 禁用监听全局事件
 * 
 * @import getName from browser.event.name.single
 * 
 * @import onMove from move.drag scoped
 * 
 * @import onEnd from ..end scoped
 * 
 * @import un from browser.global.listener.remove
 * 
 */

let me = this,
{
    onMove,
    onEnd
} = me;

un(getName('move') ,  onMove) ;

un(getName('end') , onEnd) ;

delete me.onMove ;

delete me.onEnd ;