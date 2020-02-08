
/**
 * 
 * 开始事件监听
 * 
 * @import getTouchEvents from browser.event.touches
 * 
 * @import stop from browser.event.stop
 * 
 * @import on from browser.event.listener.global.add
 * 
 * @import enabled from .enabled scoped
 * 
 * @import disabled from .disabled scoped
 * 
 * @import .start.name
 *
 * @param {Event} e 事件对象
 * 
 */

stop(e) ;

let me = this ;

if(me.onStart){

    disabled() ;
}

let touches = getTouchEvents(e , 'start') ;

if(touches){

    enabled() ;
}
