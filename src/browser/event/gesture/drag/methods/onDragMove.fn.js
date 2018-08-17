
/**
 * 
 * 拖动事件监听
 * 
 * @import get from object.data.get
 * 
 * @import set from object.data.set
 * 
 * @import has from object.data.has
 * 
 * @import updateInfo from browser.event.gesture.drag.methods.updateInfo
 * 
 * @import getEvent from browser.event.pointer
 * 
 * @import dispatch from browser.event.dispatch
 * 
 * @param {Event} e 事件对象
 * 
 */

e.preventDefault() ;

let event = getEvent(e),
    el = this ;

if(has(el , 'drag:lastPoint')){

    set(el , 'drag:previousPoint' , get(el , 'drag:lastPoint')) ;
}

set(el , 'drag:lastPoint' , {
    x:event.pageX,
    y:event.pageY
}) ;

updateInfo(el , 'x' , true);

updateInfo(el , 'y' , true);

let info = get(el , 'drag:info') ;

info.time = Date.now();

dispatch(el , 'touch:drag' , {
    event,
    browserEvent:e,
    info
}) ;
