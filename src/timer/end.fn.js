
/**
 * 
 * 结束计时
 * 
 * @param {boolean} isFireEvent = true 是否触发事件
 *
 */

let me = this,{
    intervalId
} = me ;

if(intervalId){

    clearInterval(intervalId) ;

    clearTimeout(intervalId) ;

    delete me.intervalId ;

    if(isFireEvent){

        me.fireEvent('timeend') ;
    }
}