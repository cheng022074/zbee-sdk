
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

    doFireBubbleEvent.call(me , event , me , ...args) ;
 }

 function doFireBubbleEvent(event , target , ...args){

    let me = this,{
        bubbleTarget,
        emitter,
        fireEventDataCacheCount = 0,
        cacheFireEventDataList
    } = me ;

    if(fireEventDataCacheCount !== 0){

        cacheFireEventDataList.push([
            target,
            ...args
        ]) ;

        let deleteCount =  cacheFireEventDataList.length - fireEventDataCacheCount;

        if(deleteCount > 0){

            cacheFireEventDataList.splice(0 , deleteCount) ;
        }
    }

    emitter.emit(event , target ,  ...args) ;

    if(bubbleTarget){

        doFireBubbleEvent.call(bubbleTarget , event , target , ...args) ;
    }
 }