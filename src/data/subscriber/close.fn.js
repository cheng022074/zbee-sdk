
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

me.prevParams = me.params ;

delete me.params ;

me.fireEvent('close' , params) ;