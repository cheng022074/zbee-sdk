
/**
 * 
 * 判断元素是否匹配选择器
 * 
 * @param {HTMLElement} el 元素
 * 
 * @param {string} selector 选择器字符串
 * 
 * @return {boolean} 如果元素匹配选择器则返回 true , 否则返回 false 
 * 
 */

 let {
    ownerDocument
 } = el ;

 let els = Array.from(ownerDocument.querySelectorAll(selector)) ;

 return els.includes(el) ;