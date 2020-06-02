
/**
 * 
 * 双击事件实现
 * 
 * @import getEvent from browser.event.single
 * 
 * @import getTouchEvents from browser.event.touches
 * 
 * @import enabled from .double.enabled scoped
 * 
 * @import disabled from .double.disabled scoped
 * 
 * @import .double.event
 * 
 * @param {Event} e 事件对象
 * 
 */

if(getTouchEvents(e , 'start')){

    disabled() ;
 
    return ;
 
 }
 
let me = this,
{
   timer
} = me;

if(timer){

   clearTimeout(timer) ;

   return ;
}

let nativeEvent = getEvent(e , 'start'),
     {
        pageX:x,
        pageY:y
    } = nativeEvent ;
 
 me.startPoint = {
    x,
    y
 } ;

 me.startTime = Date.now() ;
 
 enabled() ;