
/**
 *
 * 触发事件
 * 
 * @import is.array
 * 
 * @import get from object.property.inner.get
 *
 * @param {string} event 事件名称
 *
 * @param {mixed} [...args] 事件参数
 *
 */

 function main(event , ...args){

    let me = this,
        isSuspendEvents = get(me , 'suspendEvents');

    if(isSuspendEvents === true || isArray(isSuspendEvents) && isSuspendEvents.includes(eent)){

        return ;
    }

    doFireBubbleEvent.call(me , event , me , ...args) ;
 }

 function doFireBubbleEvent(event , target , ...args){

    let me = this;

    get(me , 'emitter').emit(event , target ,  ...args) ;

    let bubbleTarget = get(me , 'bubbleTarget') ;

    if(bubbleTarget){

        doFireBubbleEvent.call(bubbleTarget , event , target , ...args) ;
    }
 }