
/**
 * 
 * 启动事件监听
 * 
 * @import getEvent from browser.event.pointer
 * 
 * @import enabled from browser.event.gesture.tap.double.methods.enabled
 * 
 * @import set from object.data.set
 * 
 * @import get from object.data.get
 * 
 * @import has from object.data.has
 * 
 * @param {Event} e 事件对象
 * 
 */

e.preventDefault() ;

let event = getEvent(e , true) ;

if(!event){

    return ;
}

let el = this,
    point = {
        x:event.pageX,
        y:event.pageY
    };

set(el , 'doubletap:lastStartPoint' , point) ;

if(!has(el , 'doubletap:startPoint')){

    set(el , 'doubletap:startPoint' , point) ;
}

set(el , 'doubletap:startTime' , Date.now()) ;

clearTimeout(get(el , 'doubletap:singleTapTimer')) ;

enabled(el) ;