
/**
 * 
 * 判断元素及其元素父祖级元素是否匹配选择器
 * 
 * @import is from ..is
 * 
 * @param {HTMLElement} el 元素
 * 
 * @param {string} selector 选择器
 * 
 * @return {boolean} 如果匹配则返回 true , 否则返回 false 
 * 
 */

 while(el){

    if(is(el , selector)){

        return el ;
    }

    el = el.parentElement ;
 }