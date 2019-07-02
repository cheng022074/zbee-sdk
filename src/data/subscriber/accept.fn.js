
/**
 * 
 * 接收数据
 * 
 * @import is.defined
 * 
 * @param {mixed} data 数据
 * 
 * 
 */

let me = this,
{
    closed,
    bindFn,
    params
} = me;

if(closed){

    return;
}

me.fireEvent('data' , data , params) ;

if(bindFn){

    return bindFn(data , params) ;
}