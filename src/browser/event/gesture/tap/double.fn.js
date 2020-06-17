
/**
 * 
 * 双击事件实现
 * 
 * @import getEvent from browser.event.single
 * 
 * @import enabled from .double.enabled scoped
 * 
 * @import .double.event
 * 
 * @param {Event} e 事件对象
 * 
 */

 let  me = this ;

if(me.startPoint){

    return ;
 
 }
 
let {
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
 
 enabled(e) ;