
/**
 *
 * 触发事件
 * 
 * @import is.array
 *
 * @param {string} event 事件名称
 *
 * @param {mixed} [...args] 事件参数
 *
 */

 function main(event , ...args){

    let me = this ;

    if(me.$suspendEvents === true){

        return ;
    }

    doFireBubbleEvent.call(me , event , me , ...args) ;
 }

 function doFireBubbleEvent(event , target , ...args){

    let me = this,{
        $bubbleTarget,
        emitter
    } = me ;

    emitter.emit(event , target ,  ...args) ;

    if($bubbleTarget){

        doFireBubbleEvent.call($bubbleTarget , event , target , ...args) ;
    }
 }