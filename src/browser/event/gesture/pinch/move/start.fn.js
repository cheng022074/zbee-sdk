/**
 * 
 * 缩放开始事件监听
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
 * @import on from browser.event.listener.global.add
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
    firstXY = {
        x:firstTouch.pageX,
        y:firstTouch.pageY
    },
    lastXY = {
        x:lastTouch.pageX,
        y:lastTouch.pageY
    },
    distance = getDistance(firstXY , lastXY),
    me = this;

if(distance === 0){

    return ;
}

let {
    el,
    dispatch
} = me ;

me.startDistance = distance ;

dispatch('pinchstart', {
    distance,
    point:getCenterXY(firstXY , lastXY)
});

un('touchmove' , me.onStart) ;

on('touchmove' , me.onMove = onMove) ;