/**
 * 
 * 获得元素元素样式属性值
 * 
 * @param {HTMLElement} el 元素
 * 
 * @param {string} prop 属性名称
 * 
 * @return {mixed} 样式属性值
 * 
 */

let cs = window.getComputedStyle(el , '') ;

if(cs){

   return cs[prop] ;
}