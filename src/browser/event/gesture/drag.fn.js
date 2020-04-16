
/**
 * 
 * 启动事件监听
 * 
 * @import getTouchEvents from browser.event.touches
 * 
 * @import getEvent from browser.event.single
 * 
 * @import disabled from .drag.disabled scoped
 * 
 * @import getName from browser.event.name.single
 * 
 * @import on from browser.event.listener.global.add
 * 
 * @import onStart from .drag.move.start scoped
 * 
 * @import disabled from .drag.disabled scoped
 * 
 * @import .drag.name
 * 
 * @param {Event} e 事件对象
 * 
 */

if(getTouchEvents(e , 'start')){

    disabled() ;

    return ;

}

let me = this,
{
    pageX:x,
    pageY:y
} = getEvent(e , 'start');

me.info = {
    previous: {
        x: 0,
        y: 0
    },
    x: 0,
    y: 0,
    delta: {
        x: 0,
        y: 0
    },
    absDelta: {
        x: 0,
        y: 0
    },
    flick: {
        velocity: {
            x: 0,
            y: 0
        }
    },
    direction: {
        x: 0,
        y: 0
    },
    time: 0,
    previousTime: {
        x: 0,
        y: 0
    }
} ;

me.startTime = Date.now() ;

me.startPoint = {
    x,
    y
} ;

on(getName('move') , me.onStart = onStart) ;

on(getName('end') , me.onEnd = disabled , {
    once:true
}) ;