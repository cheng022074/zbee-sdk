
/**
 * 
 * 启动事件监听
 * 
 * @import set from object.data.set
 * 
 * @import getEvent from browser.event.pointer
 * 
 * @import addEventListener from browser.html.element.addWindowEventListener
 * 
 * @import onMove from browser.event.gesture.drag.methods.onMove
 * 
 * @import getEventName from browser.event.pointer.move
 * 
 * @param {Event} e 事件对象
 * 
 */

e.preventDefault() ;

let event = getEvent(e , true);

if(!event){

    return ;
}

let el = this ;

set(el, 'drag:info', {
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
}),
set(el , 'drag:startTime' , Date.now()),
set(el , 'drag:startPoint' , {
    x:event.pageX,
    y:event.pageY
});

addEventListener(el , getEventName() , onMove) ;
