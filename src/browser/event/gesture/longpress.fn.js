
/**
 * 
 * 开始事件监听
 * 
 * @import on from browser.event.listener.global.add
 * 
 * @import getName from browser.event.name.single
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

let me = this ;

if(me.startPoint){

   return ;

}

let nativeEvent = getEvent(e , 'start'),
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

    disabled(e) ;

    if(event === 'longpress'){

        on(getName('end' , e) , e =>  me.dispatch('longpresscancel' , {
            nativeEvent:getEvent(e , 'end')
        }) , {
            once:true
        }) ;
    }

 } , minDuration);

enabled(e) ;