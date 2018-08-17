
/**
 * 
 * 设置元素定位方式
 * 
 * @import isStyle from browser.html.element.isStyle
 * 
 * @import setStyle from browser.html.element.setStyle
 * 
 * @import is.defined
 * 
 * @import setXY from browser.html.element.setXY
 * 
 * @param {HTMLElement} el 作用元素
 * 
 * @param {string} [pos] 定位方式
 * 
 * @param {number} [zIndex] 层次设置
 * 
 * @param {number} [x] 横坐标
 * 
 * @param {number} [y] 纵坐标
 * 
 * @return {mixed} 返回说明 
 * 
 */

if(el !== document && el !== document.body){

    if(!pos && isStyle(el , 'position' , 'static')){
    
        setStyle(el , 'position' , 'relative') ;
    
    }else if(pos){

        setStyle(el , 'position' , pos) ;
    }

    if(isDefined(zIndex)){

        setStyle(el , 'zindex' , zIndex) ;
    }

    if(x || y){

        setXY(el , x || false , y || false) ;
    }
}
