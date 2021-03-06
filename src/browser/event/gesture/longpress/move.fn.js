
/**
 * 
 * 移动事件监听
 * 
 * @import getTouchEvents from browser.event.touches
 * 
 * @import getEvent from browser.event.single
 * 
 * @import getDistance from math.point.line.distance
 * 
 * @import getScale from browser.scale
 * 
 * @import disabled from .disabled scoped
 * 
 * @config moveDistance from event.longpress...moveDistance
 * 
 * @param {Event} e 事件对象
 * 
 */

if(getTouchEvents(e , 'move')){

    disabled(e) ;

    return ;
}

let me = this,
    {
        pageX,
        pageY
    } = getEvent(e , 'move'),
    {
        startPoint,
        dispatch
    } = me;

if(Math.round(getDistance({
    x:pageX,
    y:pageY
} , startPoint)) * getScale() >= moveDistance){

    disabled(e) ;
}