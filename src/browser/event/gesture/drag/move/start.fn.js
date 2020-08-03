/**
 * 
 * 检查是否启用拖曳事件
 * 
 * @import getTouchEvents from browser.event.touches
 * 
 * @import prevent from browser.event.prevent
 * 
 * @import getEvent from browser.event.single
 * 
 * @import getName from browser.event.name.single
 * 
 * @import enabled from ..enabled scoped
 * 
 * @import scale from browser.scale
 * 
 * @import resetInfo from ..info.reset scoped
 * 
 * @import getDistance from math.point.line.distance
 * 
 * @import un from browser.event.listener.global.remove
 * 
 * @import disabled from ..disabled scoped
 * 
 * @config minDistance from event.drag...minDistance
 * 
 * @param {Event} e 事件对象
 * 
 */


prevent(e) ;

if(getTouchEvents(e , 'move')){

    disabled(e) ;

    return ;
}

let me = this,
{
    pageX:x,
    pageY:y
} = getEvent(e , 'move'),
{
    startPoint,
    info,
    dispatch
} = me,
point = {
    x,
    y
};

if (Math.round(getDistance(startPoint , point)) * scale() >= minDistance) {

    me.previousPoint = point ;

    me.lastPoint = point ;

    resetInfo('x');
    
    resetInfo('y');

    info.time = Date.now();

    let {
        dragStartNativeEvent
    } = me ;

    dispatch('dragstart', {
        nativeEvent:dragStartNativeEvent,
        info
    });

    delete me.dragStartNativeEvent ;

    un(getName('move' , e) , me.onStart) ;

    un(getName('end' , e) , me.onEnd) ;

    enabled(e) ;
}