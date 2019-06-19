
/**
 * 
 * 移动事件监听
 * 
 *  @import getEvent from browser.event.single
 * 
 * @import getDistance from math.point.distance
 * 
 * @import dispatch from browser.event.dispatch
 * 
 * @import disabled from ..disabled scoped
 * 
 * @import getScale from browser.scale
 * 
 * @import stop from browser.event.stop
 * 
 * @config moveDistance from event.tap...moveDistance
 * 
 * @param {Event} e 事件对象
 * 
 */

stop(e) ;

const {
    round,
    abs
} = Math ;

let me = this,
    {
        pageX,
        pageY
    } = getEvent(e),
    {
        startX,
        startY,
        el
    } = me;

if(round(abs(getDistance({
    x:pageX,
    y:pageY
} , {
    x:startX,
    y:startY
}))) * getScale() >= moveDistance){

    dispatch(el , 'gesture:tapcancel' , e) ;

    disabled() ;
}