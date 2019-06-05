
/**
 * 
 * 重新打开订阅器
 * 
 */

let me = this,
{
    closed,
    params
} = me ;

if(!closed){

    me.close() ;

    me.open(params) ;
}