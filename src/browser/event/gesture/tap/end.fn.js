
/**
 * 
 * 结束事件监听
 * 
 * @import disabled from ..disabled scoped
 * 
 * @import stop from browser.event.stop
 * 
 * @import dispatch from browser.event.dispatch scoped
 * 
 * @param {Event} e 事件对象
 * 
 */

 stop(e) ;

 dispatch(this.el , 'gesture:tap' , e) ;

 disabled() ;

 