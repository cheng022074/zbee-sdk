
/**
 * 
 * 开始事件监听
 * 
 * @import getEvent from browser.event.single
 * 
 * @import getTouchEvents from browser.event.touches
 * 
 * @import enabled from .tap.enabled scoped
 * 
 * @import disabled from .tap.disabled scoped
 * 
 * @config maxDuration from event.tap...maxDuration
 * 
 * @import .tap.event
 * 
 * @import stop from ..stop
 *
 * @param {Event} e 事件对象
 * 
 */

if(getTouchEvents(e , 'start')){

   disabled(e) ;

   return ;

}

let me = this,
   nativeEvent = getEvent(e , 'start'),
   {
      pageX:x,
      pageY:y,
      pointerType,
      button
   } = nativeEvent;

if(pointerType === 'mouse'){

   if(button !== 0){

      return ;
   }
}

me.startPoint = {
   x,
   y
} ;

me.nativeEvent = nativeEvent ;

enabled(e) ;

me.timer = setTimeout(() => disabled(e) , maxDuration) ;
