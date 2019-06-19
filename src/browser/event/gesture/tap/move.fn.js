
/**
 * 
 * 移动事件监听
 * 
 *  @import getEvent from browser.event.single
 * 
 * @import getDistance from math.point.distance
 * 
 * @import getScale from browser.scale
 * 
 * @import stop from browser.event.stop
 * 
 * @import dispatchCancelEvent from ..dispatch.cancel scoped
 * 
 * @config moveDistance from event.tap...moveDistance
 * 
 * @param {Event} e 事件对象
 * 
 */

stop(e) ;

let me = this,
    {
        pageX,
        pageY
    } = getEvent(e , 'move'),
    {
        startPoint,
        el
    } = me;

if(Math.round(getDistance({
    x:pageX,
    y:pageY
} , startPoint)) * getScale() >= moveDistance){

    dispatchCancelEvent() ;
}