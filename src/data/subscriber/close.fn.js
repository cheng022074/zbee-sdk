
/**
 * 
 * 关闭订阅器
 * 
 */

let {
    closed,
    params,
    cache
} = this;

if(closed){

    return ;
}

delete me.params ;

cache.length = 0 ;

me.closed = true ;

me.fireEvent('close' , params) ;