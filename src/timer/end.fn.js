
/**
 * 
 * 结束计时
 * 
 * @param {string} name 结果计时的事件名称
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