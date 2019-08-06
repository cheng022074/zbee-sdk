/**
 * 
 * 检查是否启用拖曳事件
 * 
 * @import prevent from browser.event.prevent
 * 
 * @import getEvent from browser.event.single
 * 
 * @import getName from browser.event.name.single
 * 
 * @import enabled from ....enabled scoped
 * 
 * @import scale from browser.scale
 * 
 * @import resetInfo from ....info.reset scoped
 * 
 * @import un from browser.global.listener.remove
 * 
 * @config minDistance from gesture.drag...minDistance
 * 
 * @param {Event} e 事件对象
 * 
 */


prevent(e) ;

let me = this,{
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

if (Math.round(startPoint , point) * scale() >= minDistance) {

    me.previousPoint = point ;

    me.lastPoint = point ;

    resetInfo('x');
    
    resetInfo('y');

    info.time = Date.now();

    dispatch('dragstart', info);

    un(getName('move') , me.onStart) ;

    enabled() ;
}