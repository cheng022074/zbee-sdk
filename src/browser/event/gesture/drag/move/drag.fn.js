
/**
 * 
 * 拖动事件监听
 * 
 * @import prevent from browser.event.prevent
 * 
 * @import getEvent from browser.event.single
 * 
 * @import updateInfo from ..info.update scoped
 * 
 * @import getTouchEvents from browser.event.touches
 * 
 * @import disabled from ..disabled scoped
 * 
 * @param {Event} e 事件对象
 * 
 */

prevent(e) ;

if(getTouchEvents(e ,'move')){

    disabled(e) ;

    return ;
}

let me = this,
nativeEvent = getEvent(e , 'move'),
{
    pageX:x,
    pageY:y
} = nativeEvent,
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

if(!me.startPoint){

    disabled(e) ;

    dispatch('drag' , {
        info:me.info,
        nativeEvent
    }) ;

    return ;
}

updateInfo('x' , true);

updateInfo('y' , true);

let {
    info
} = me;

info.time = Date.now();

dispatch('drag' , {
    info,
    nativeEvent
}) ;