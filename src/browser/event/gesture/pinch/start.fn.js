
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
 * @param {Event} e 事件对象
 * 
 */

prevent(e) ;

stop(e) ;

let touches = getTouchEvents(e , 'start') ;

if(touches){

    on('touchmove' , this.onMoveStart = onMove) ;
}
