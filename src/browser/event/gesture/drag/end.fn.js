
/**
 * 
 * 结束事件监听
 * 
 * @import prevent from browser.event.prevent
 * 
 * @import getEvent from browser.event.single
 * 
 * @import updateInfo from .info.update scoped
 * 
 * @import onAxisEnd from .end.axis scoped
 * 
 * @import disabled from .disabled scoped
 * 
 * @param {Event} e 事件对象
 * 
 */

prevent(e) ;

let me = this,
{
    info,
    dispatch
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

dispatch('dragend', info);

disabled(e) ;

