
/**
 * 
 * 设置元素样式
 * 
 * @import is.string
 * 
 * @import setStyle from browser.html.element.setStyle
 * 
 * @param {HTMLElement} el 作用元素
 * 
 * @param {string|object} prop 属性名称
 * 
 * @param {mixed} [value] 属性值
 * 
 */

if(isString(prop)){

    el.style.setProperty(prop , value) ;

}else{

    let names = Object.keys(prop) ;

    for(let name of names){

        setStyle(el , name , prop[name]) ;
    }
}