
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
 * @param {Event} e 事件对象
 * 
 */

let me = this,
{
    onStart,
    onMove,
    onEnd
} = me;

un(getName('move' , e) , onStart) ;

un(getName('move' , e) ,  onMove) ;

un(getName('end' , e) , onEnd) ;

delete me.onStart ;

delete me.onMove ;

delete me.onEnd ;

delete me.info ;

delete me.startTime ;

delete me.startPoint ;