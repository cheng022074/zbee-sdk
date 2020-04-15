
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
 * @import enabled from .enabled scoped
 * 
 * @import disabled from .disabled scoped
 * 
 * @import .longpress.event
 * 
 * @config minDuration from event.longpress...minDuration
 *
 * @param {Event} e 事件对象
 * 
 */

stop(e) ;

if(getTouchEvents(e , 'start')){

   disabled() ;

   return ;

}

let me = this ;

me.timer = setTimeout(() => {

    me.dispatch('longpress' , {
        nativeEvent:getEvent(e , 'start')
    }) ;

    disabled() ;

 } , minDuration);

enabled() ;