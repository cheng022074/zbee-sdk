/**
 * 
 * 缩放开始事件监听
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
 * @import on from browser.event.listener.global.add
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
    scale: 1
});

un('touchmove' , me.onStart) ;

on('touchmove' , me.onMove = onMove) ;