
/**
 * 
 * 启动计时
 * 
 * @import is.number
 * 
 * @import end from ..end scoped
 * 
 * @param {number} [duration] 计时时长
 * 
 */

function onInterval(duration , startTime){

    let me = this,
    {
        interval,
        intervalId,
        onInterval
    } = me,
    remainDuration = duration - (Date.now() - startTime) ;

    if(remainDuration > 0){
    
        me.fireEvent('time') ;

        if(remainDuration < interval){

            clearInterval(intervalId) ;

            setTimeout(onInterval , remainDuration) ;
        }
    
    }else{

        end('timeend') ;
    }
 }

function main(){

    let me = this,
    {
        interval,
        onInterval,
        defaultDuration
    } = me;

    duration = isNumber(duration) ? duration : defaultDuration ;

    me.fireEvent('timestart') ;

    me.intervalId = setInterval( me.onInterval = onInterval.bind(me , duration , Date.now()) , interval) ;
}