
/**
 *
 * 触发事件
 *
 * @param {string} event 事件名称
 *
 * @param {mixed} [...args] 事件参数
 *
 */

 function main(event , ...args){

    let me = this ;

    doFireBubbleEvent.call(me , event , me , ...args) ;
 }

 function doFireBubbleEvent(event , target , ...args){

    let me = this,{
        bubbleTarget,
        emitter
    } = me ;

    if('emit' in emitter){

        emitter.emit(event , target ,  ...args) ;
    }

    if(bubbleTarget){

        doFireBubbleEvent.call(bubbleTarget , event , target , ...args) ;
    }
 }