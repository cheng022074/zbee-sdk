
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
 * @import disabled from ..disabled scoped
 * 
 * @config moveDistance from event.tap...moveDistance
 * 
 * @param {Event} e 事件对象
 * 
 */

let me = this,
    {
        pageX,
        pageY
    } = getEvent(e , 'move'),
    {
        startPoint,
        dispatch
    } = this;

if(Math.round(getDistance({
    x:pageX,
    y:pageY
} , startPoint)) * getScale() >= moveDistance){

    dispatch('tapcancel') ;

    disabled() ;
}