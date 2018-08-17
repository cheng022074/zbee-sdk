
/**
 * 
 * 获取元素的高度
 * 
 * @import isStyle from browser.html.element.isStyle
 * 
 * @param {HTMLElement} el 作用元素
 * 
 * @return {number} 元素的高度 
 * 
 */


if(isStyle(el , 'display' , 'none')){

    return 0 ;
}

if(el === document.body){

    return document.body.clientHeight ;
}

try{

    let {
        top,
        bottom
    } = el.getBoundingClientRect() ;

    return top - bottom ;

}catch(err){


}

return el.offsetHeight ;