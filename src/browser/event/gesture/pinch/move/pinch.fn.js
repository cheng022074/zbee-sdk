/**
 * 
 * 缩放进行事件监听
 * 
 * @import getTouchEvents from browser.event.touches
 * 
 * @import stop from browser.event.stop
 * 
 * @import getDistance from math.point.line.distance
 * 
 * @import getCenterXY from math.point.line.center
 * 
 * @import un from browser.event.listener.global.remove
 * 
 * @import onMove from .pinch scoped
 * 
 * @param {Event} e 事件对象
 * 
 */

stop(e) ;

let touches = getTouchEvents(e , 'move'),
    [
        firstTouch,
        lastTouch
    ] = touches,
    startXY = {
        x:firstTouch.pageX,
        y:firstTouch.pageY
    },
    endXY = {
        x:lastTouch.pageX,
        y:lastTouch.pageY
    },
    distance = getDistance(startXY , endXY),
    {
        startDistance,
        dispatch
    } = this;

dispatch('pinch', {
    distance,
    point:getCenterXY(startXY , endXY),
    scale:distance / startDistance
});