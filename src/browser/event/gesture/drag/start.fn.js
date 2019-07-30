
/**
 * 
 * 启动事件监听
 * 
 * @import prevent from browser.event.prevent
 * 
 * @import getTouchEvents from browser.event.touches
 * 
 * @import getEvent from browser.event.single
 * 
 * @import disabled from ..disabled scoped
 * 
 * @import getName from browser.event.name.single
 * 
 * @import on from browser.global.listener.add
 * 
 * @import onMove from ..move.start scoped
 * 
 * @param {Event} e 事件对象
 * 
 */

prevent(e) ;

 if(getTouchEvents(e)){

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

on(getName('move') , onMove) ;