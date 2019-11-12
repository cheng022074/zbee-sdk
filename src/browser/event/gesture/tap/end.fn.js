
/**
 * 
 * 结束事件监听
 * 
 * @import getEvent from browser.event.single
 * 
 * @import disabled from ..disabled scoped
 * 
 * @import stop from browser.event.stop
 * 
 * @param {Event} e 事件对象
 * 
 */

 this.dispatch('tap' , {
     nativeEvent:getEvent(e , 'end')
 }) ;

 disabled() ;

 