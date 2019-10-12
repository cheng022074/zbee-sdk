
/**
 * 
 * 启动计时
 * 
 * @import is.number
 * 
 * @import end from ..end scoped
 * 
 * @import reset from ..reset scoped
 * 
 * @param {number} [duration] 计时时长
 * 
 */

function onInterval(duration , startTime){

    let me = this,
    {
        interval,
        onInterval
    } = me,
    remainDuration = duration - (Date.now() - startTime) ;

    if(remainDuration > 0){
    
        me.fireEvent('time') ;

        if(remainDuration < interval){

            reset() ;

            me.intervalId = setTimeout(onInterval , remainDuration) ;
        }
    
    }else{

        reset() ;

        me.fireEvent('timeout') ;
    }
 }

function main(duration){

    let me = this,
    {
        interval,
        defaultDuration
    } = me;

    me.end() ;

    duration = isNumber(duration) ? duration : defaultDuration ;

    me.fireEvent('timestart') ;

    me.intervalId = setInterval(me.onInterval = onInterval.bind(me , duration , Date.now()) , interval) ;
}