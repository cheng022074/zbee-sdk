
/**
 * 
 * 在目标元素之前加一个新元素
 * 
 * @import create from html.element.create
 * 
 * @param {HTMLElement} el 目标元素
 * 
 * @param {object} config 元素配置
 * 
 * @return {HTMLElement}  增加的子元素引用 
 * 
 */

el.parentElement.insertBefore(create(config , el.ownerDocument) , el) ;
