
/**
 * 
 * 移动事件监听
 * 
 * @import getEvent from browser.event.pointer
 * 
 * @import getDistance from math.point.distance
 * 
 * @import disabled from browser.event.gesture.tap.double.methods.disabled
 * 
 * @import scale from browser.scale
 * 
 * @import get from object.data.get
 * 
 * @config moveDistance from gesture.doubletap...moveDistance
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
} , get(el , 'doubletap:lastStartPoint')) * scale())) >= moveDistance){
    
    disabled(el) ;
}
