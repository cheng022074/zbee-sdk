
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
 * @config timeout from event.tap...timeout
 * 
 * @param {Event} e 事件对象
 * 
 */

 stop(e) ;

 if(getTouchEvents(e)){

    disabled() ;

 }else{

    let me = this ;

    let {
        pageX,
        pageY
    } = getEvent(e , 'start') ;

    me.startX = pageX ;

    me.startY = pageY ;

    enabled() ;
 }
