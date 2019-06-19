import { ALPN_ENABLED } from "constants";

/**
 * 
 * 检查是否启用拖曳事件
 * 
 * @import stop from browser.event.stop
 * 
 * @import getEvent from browser.event.single
 * 
 * @import getName from browser.event.name.single
 * 
 * @import disabled from ....disabled scoped
 * 
 * @import enabled from ....enabled scoped
 * 
 * @import scale from browser.scale
 * 
 * @import resetInfo from ....info.reset scoped
 * 
 * @import onMove from ..start
 * 
 * @import dispatch from browser.event.dispatch
 * 
 * @import un from browser.global.listener.remove
 * 
 * @config minDistance from gesture.drag...minDistance
 * 
 * @param {Event} e 事件对象
 * 
 */


stop(e) ;

let me = this,{
    pageX:x,
    pageY:y
} = getEvent(e , 'move'),
{
    startPoint,
    info,
    el
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

    dispatch(el , 'gesture:dragstart', info);

    un(getName('move') , onMove) ;

    enabled() ;
}