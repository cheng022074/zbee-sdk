
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
 * @import enabled from ..enabled scoped
 * 
 * @import disabled from ..disabled scoped
 * 
 * @import .start.name
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
