
/**
 * 
 * 开始事件监听
 * 
 * @import getTouchEvents from browser.event.touches
 * 
 * @import getEvent from browser.event.single
 * 
 * @import stop from browser.event.stop
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

stop(e) ;

if(getTouchEvents(e , 'start')){

   disabled() ;

   return ;

}

let me = this ;

me.timer = setTimeout(() => {

    me.dispatch(event , {
        nativeEvent:getEvent(e , 'start')
    }) ;

    disabled() ;

 } , minDuration);

enabled() ;