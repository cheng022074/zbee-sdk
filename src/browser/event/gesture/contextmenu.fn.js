
/**
 * 
 * 开始事件监听
 * 
 * @import stop from browser.event.stop
 * 
 * @import prevent from browser.event.prevent
 * 
 * @import .contextmenu.event
 *
 * @param {Event} e 事件对象
 * 
 */

prevent(e) ;

stop(e) ;

this.dispatch('contextmenu' , {
    nativeEvent:e
}) ;