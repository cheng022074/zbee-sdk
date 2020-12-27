
/**
 * 
 * 触发一个自定义事件
 * 
 * @param {HTMLElement} el 元素
 * 
 * @param {string} name 自定义事件名称
 * 
 * @param {mixed} detail 基于自定义事件传递的数据
 * 
 */

el.dispatchEvent(new CustomEvent(name , {
   detail,
   bubbles:false,
   cancelable:false
})) ;
