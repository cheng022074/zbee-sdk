
/**
 * 
 * 重置
 * 
 * @import is.defined
 * 
 */

 let me = this,
 {
    intervalId
 } = me ;

 if(isDefined(intervalId)){

    clearInterval(intervalId) ;

    clearTimeout(intervalId) ;

    delete me.intervalId ;
 }