
/**
 * 
 * 获得元素的宽度
 * 
 * @import isStyle from browser.html.element.isStyle
 * 
 * @param {HTMLElement} el 作用元素
 * 
 * @return {number} 元素的宽度 
 * 
 */

if(isStyle(el , 'display' , 'none')){

    return 0 ;
}

try{

    let {
        left,
        right
    } = el.getBoundingClientRect() ;

    return right - left ;

}catch(err){


}

return el.offsetWidth ;

