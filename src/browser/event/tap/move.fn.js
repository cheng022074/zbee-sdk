
/**
 * 
 * 移动事件监听
 * 
 * @import getEventProperties from browser.event.point.single.get
 * 
 * @import getDistance from math.point.distance
 * 
 * @import dispatch from browser.event.dispatch scoped
 * 
 * @import disabled from ..disabled scoped
 * 
 * @import getScale from browser.scale
 * 
 * @config moveDistance from event.tap...moveDistance
 * 
 * @param {Event} e 事件对象
 * 
 */

e.preventDefault() ;

let me = this,
    {
        pageX,
        pageY
    } = getEventProperties(e , [
        'pageX',
        'pageY'
    ]),
    {
        startX,
        startY
    } = me;

if(Math.round(Math.abs(getDistance({
    x:pageX,
    y:pageY
} , {
    x:startX,
    y:startY
}))) * getScale() >= moveDistance){

    dispatch('tapcancel' , e) ;

    disabled() ;
}