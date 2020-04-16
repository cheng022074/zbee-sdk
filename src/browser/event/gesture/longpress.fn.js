
/**
 * 
 * 开始事件监听
 * 
 * @import getTouchEvents from browser.event.touches
 * 
 * @import getEvent from browser.event.single
 * 
 * @import enabled from .longpress.enabled scoped
 * 
 * @import disabled from .longpress.disabled scoped
 * 
 * @import .longpress.event
 * 
 * @config minDuration from event.longpress...minDuration
 *
 * @param {Event} e 事件对象
 * 
 * @param {string} [event = 'longpress'] 抛出的事件名称
 * 
 */

if(getTouchEvents(e , 'start')){

   disabled() ;

   return ;

}

let me = this,
nativeEvent = getEvent(e , 'start'),
{
    pageX:x,
    pageY:y
} = nativeEvent;

 me.startPoint = {
    x,
    y
 } ;

me.timer = setTimeout(() => {

    me.dispatch(event , {
        nativeEvent
    }) ;

    disabled() ;

 } , minDuration);

enabled() ;