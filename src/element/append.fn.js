
/**
 * 
 * 给目标元素新增加一个子元素
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

 el.appendChild(create(config , el.ownerDocument)) ;