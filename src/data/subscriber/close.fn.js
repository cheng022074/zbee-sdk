
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

cache.length = 0 ;

me.closed = true ;

me.fireEvent('close' , params) ;