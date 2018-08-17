/**
 * 
 * 取消滑动事件
 * 
 * @import disabled from browser.event.gesture.swipe.methods.disabled
 * 
 * @import dispatch from browser.event.dispatch
 * 
 * @param {HTMLElement} el 作用元素
 * 
 * @param {Event} event 当前可用事件对象
 * 
 * @param {Event} e 原始事件对象
 * 
 */

disabled(el) ;

dispatch(el , 'touch:swipecancel' , {
    browserEvent:e,
    event
}) ;