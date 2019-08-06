/**
 * 
 * 缩放进行事件监听
 * 
 * @import getTouchEvents from browser.event.touches
 * 
 * @import prevent from browser.event.prevent
 * 
 * @import stop from browser.event.stop
 * 
 * @import getDistance from math.point.distance
 * 
 * @import un from browser.event.listener.global.remove
 * 
 * @import onMove from .pinch scoped
 * 
 * @param {Event} e 事件对象
 * 
 */

prevent(e) ;

stop(e) ;

let touches = getTouchEvents(e , 'move'),
    [
        firstTouch,
        lastTouch
    ] = touches,
    distance = getDistance({
        x:firstTouch.pageX,
        y:firstTouch.pageY
    } , {
        x:lastTouch.pageX,
        y:lastTouch.pageY
    }),
    {
        startDistance,
        dispatch
    } = this;

dispatch('pinch', {
    distance,
    scale:distance / startDistance
});