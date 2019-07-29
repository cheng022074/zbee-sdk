
/**
 * 
 * 拖动事件监听
 * 
 * @import stop from browser.event.stop
 * 
 * @import getEvent from browser.event.single
 * 
 * @import updateInfo from ....info.update scoped
 * 
 * @import getEvent from browser.event.pointer
 * 
 * @import dispatch from browser.event.dispatch
 * 
 * @param {Event} e 事件对象
 * 
 */

stop(e) ;

let me = this,
{
    pageX:x,
    pageY:y
} = getEvent(e , 'move'),
point = {
    x,
    y
},
{
    lastPoint
} = me;

if(lastPoint){

    me.previousPoint = lastPoint ;
}

me.lastPoint = point ;

updateInfo('x' , true);

updateInfo('y' , true);

let {
    info
} = me;

info.time = Date.now();

dispatch(el , 'touch:drag' , info) ;