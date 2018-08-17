
/**
 * 
 * 获得元素元素样式属性值
 * 
 * @import is.array
 * 
 * @import getStyle from browser.html.element.getStyle
 * 
 * @param {HTMLElement} el 元素
 * 
 * @param {string|array} prop 属性名称
 * 
 * @param {boolean} [inline = false] 是否获取内联样式值
 * 
 * @return {mixed} 样式属性值
 * 
 */

if(isArray(prop)){

    let values = {},
        props = prop;
    
    for(let prop of props){

        values[prop] = getStyle(el , prop , inline) ;
    }

    return values ;

}

if(inline){

    return el.style.getPropertyValue(prop);

}else{

    style = window.getComputedStyle(el , null);

    if(style){

        return style[prop] ;

    }else{

        return getStyle(el , prop , true) ;
    }
}