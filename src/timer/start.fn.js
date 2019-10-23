
/**
 * 
 * 启动计时
 * 
 * @import is.number
 * 
 * @import end from ..end scoped
 * 
 * @import reset from ..reset
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

            reset.call(me) ;

            me.intervalId = setTimeout(onInterval , remainDuration) ;
        }
    
    }else{

        reset.call(me) ;

        me.fireEvent('timeout') ;
    }
 }

function main(){

    let me = this,
    {
        interval,
        duration
    } = me;

    end() ;

    me.fireEvent('timestart') ;

    me.intervalId = setInterval(me.onInterval = onInterval.bind(me , duration , Date.now()) , interval) ;
}