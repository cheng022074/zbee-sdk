
/**
 * 
 * 结束事件监听
 * 
 * @import stop from browser.event.stop
 * 
 * @import getEvent from browser.event.single
 * 
 * @import updateInfo from ....info.update scoped
 * 
 * @import onAxisEnd from end.axis scoped
 * 
 * @import dispatch from browser.event.dispatch
 * 
 * @import disabled from ..disabled scoped
 * 
 * @param {Event} e 事件对象
 * 
 */

stop(e) ;

let me = this,
{
    info
} = me,
{
    pageX:x,
    pageY:y
} = getEvent(e , 'end') ;

me.lastPoint = {
    x,
    y
} ;

updateInfo('x');

updateInfo('y');

info.time = Date.now();

onAxisEnd('x', info);

onAxisEnd('y', info);

dispatch(el , 'touch:dragend', info);

disabled() ;

