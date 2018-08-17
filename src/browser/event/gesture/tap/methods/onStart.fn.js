
/**
 * 
 * 启动事件监听
 * 
 * @import getEvent from browser.event.pointer
 * 
 * @import enabled from browser.event.gesture.tap.methods.enabled
 * 
 * @import set from object.data.set
 * 
 * @import get from object.data.get
 * 
 * @import has from object.data.has
 * 
 * @import tap from browser.event.gesture.tap
 * 
 * @config timeout from gesture.tap...timeout
 * 
 * @param {Event} e 事件对象
 * 
 */

let {
    locked,
    time
} = tap ;

if(locked === true){

    return ;
}

let currentTime = Date.now() ;

if(time && currentTime - time <= timeout){

    return ;
}

tap.time = currentTime ;

tap.locked = true ;

e.preventDefault() ;

let event = getEvent(e , true);

if(!event){

    return ;
}

let el = this ;

set(el , 'tap:startPoint' , {
    x:event.pageX,
    y:event.pageY
}) ;

if(has(el , 'tap:defer')){

    clearTimeout(get(el , 'tap:deferTimer')) ;
}

enabled(el) ;