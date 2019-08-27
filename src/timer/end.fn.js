
/**
 * 
 * 结束计时
 *
 */

let me = this,{
    intervalId
} = me ;

if(intervalId){

    clearInterval(intervalId) ;

    clearTimeout(intervalId) ;

    delete me.intervalId ;

    me.fireEvent('timeend') ;
}