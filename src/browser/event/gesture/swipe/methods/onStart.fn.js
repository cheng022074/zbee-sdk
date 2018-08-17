
/**
 * 
 * 启动事件监听
 * 
 * @import getEvent from browser.event.pointer
 * 
 * @import enabled from browser.event.gesture.swipe.methods.enabled
 * 
 * @import set from object.data.set
 * 
 * @param {Event} e 事件对象
 * 
 */

e.preventDefault() ;

let event = getEvent(e , true);

if(!event){

    return ;
}

let el = this ;

set(el , 'swipe:startTime' , Date.now()) ;

set(el , 'swipe:isHorizontal' , true) ;

set(el , 'swipe:isVertical' , true) ;

set(el , 'swipe:startX' , event.pageX) ;

set(el , 'swipe:startY' , event.pageY) ;

enabled(el) ;