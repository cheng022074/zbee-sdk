
/**
 * 
 * 全局监听按下事件
 * 
 * @import getTouchEvents from browser.event.touches
 * 
 * @import stop from browser.event.stop
 * 
 * @import disabled from ..disabled scoped
 * 
 * @param {Event} e 事件
 * 
 */

 stop(e) ;

 if(getTouchEvents(e)){

    dispatch(el , 'gesture:tapcancel' , e) ;

    disabled() ;
 }
 