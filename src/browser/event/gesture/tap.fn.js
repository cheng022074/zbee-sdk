
/**
 * 
 * 开始事件监听
 * 
 * @import getEvent from browser.event.single
 * 
 * @import getTouchEvents from browser.event.touches
 * 
 * @import stop from browser.event.stop
 * 
 * @import enabled from .tap.enabled scoped
 * 
 * @import disabled from .tap.disabled scoped
 * 
 * @config maxDuration from event.tap...maxDuration
 * 
 * @import .tap.event
 *
 * @param {Event} e 事件对象
 * 
 */

stop(e) ;

if(getTouchEvents(e , 'start')){

   disabled() ;

   return ;

}

let me = this,
{
   pageX:x,
   pageY:y
} = getEvent(e , 'start') ;

me.startPoint = {
   x,
   y
} ;

enabled() ;

me.timer = setTimeout(() => disabled() , maxDuration) ;
