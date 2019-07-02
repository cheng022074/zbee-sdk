
/**
 * 
 * 关闭订阅器
 * 
 */

let me = this,
{
    closed,
    params,
    cache
} = me;

if(closed){

    return ;
}

delete me.params ;

delete me.recentData ;

me.closed = true ;

me.fireEvent('close' , params) ;