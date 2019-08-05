
/**
 * 
 * 开始事件监听
 * 
 * @import getTouchEvents from browser.event.touches
 * 
 * @import prevent from browser.event.prevent
 * 
 * @import stop from browser.event.stop
 * 
 * @import on from browser.global.listener.add
 * 
 * @import onMove from .move.start scoped
 * 
 * @import onEnd from .end scoped
 *
 * @param {Event} e 事件对象
 * 
 */

prevent(e) ;

stop(e) ;

let me = this ;

if(me.onStart){

    return ;
}

let touches = getTouchEvents(e , 'start') ;

if(touches){

    on('touchmove' , me.onStart = onMove) ;

    on('touchend' , me.onEnd = onEnd) ;
}
