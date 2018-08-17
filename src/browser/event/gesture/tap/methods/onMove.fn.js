
/**
 * 
 * 移动事件监听
 * 
 * @import getEvent from browser.event.pointer
 * 
 * @import getDistance from math.point.distance
 * 
 * @import disabled from browser.event.gesture.tap.methods.disabled
 * 
 * @import scale from browser.scale
 * 
 * @import get from object.data.get
 * 
 * @import dispatch from browser.event.dispatch
 * 
 * @config moveDistance from gesture.tap...moveDistance
 * 
 * @param {Event} e 事件对象
 * 
 */

e.preventDefault() ;

let el = this,
    event = getEvent(e);

if(Math.round(Math.abs(getDistance({
    x:event.pageX,
    y:event.pageY
} , get(el , 'tap:startPoint')) * scale())) >= moveDistance){

    dispatch(el , 'touch:tapcancel' , {
        browserEvent:e,
        event
    }) ;
    
    disabled(el) ;
}