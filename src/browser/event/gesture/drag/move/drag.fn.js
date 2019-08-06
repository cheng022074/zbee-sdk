
/**
 * 
 * 拖动事件监听
 * 
 * @import prevent from browser.event.prevent
 * 
 * @import getEvent from browser.event.single
 * 
 * @import updateInfo from ....info.update scoped
 * 
 * @import getEvent from browser.event.pointer
 * 
 * @param {Event} e 事件对象
 * 
 */

prevent(e) ;

let me = this,
{
    pageX:x,
    pageY:y
} = getEvent(e , 'move'),
{
    lastPoint,
    dispatch
} = me;

if(lastPoint){

    me.previousPoint = lastPoint ;
}

me.lastPoint = {
    x,
    y
} ;

updateInfo('x' , true);

updateInfo('y' , true);

let {
    info
} = me;

info.time = Date.now();

dispatch('drag' , info) ;