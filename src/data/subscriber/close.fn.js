
/**
 * 
 * 关闭订阅器
 * 
 */

let me = this,
{
    params,
    closed
} = me;

if(closed){

    return ;
}

delete me.params ;

me.closed = true ;

me.fireEvent('close' , params) ;