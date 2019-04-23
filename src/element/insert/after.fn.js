
/**
 * 
 * 在目标元素之后加一个新元素
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

let nextEl = el.nextElementSibling,
    createEl = create(config , el.ownerDocument),
    parentEl = el.parentElement;

if(nextEl){

    parentEl.insertBefore(createEl , nextEl) ;

}else{

    parentEl.appendChild(createEl) ;
}
