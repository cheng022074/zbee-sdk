
/**
 * 
 * 接收数据
 * 
 * @param {mixed} data 数据
 * 
 * 
 */

let me = this,
{
    closed,
    bindFn,
    params,
    connection,
    name
} = me;

if(closed){

    return;
}

me.fireEvent('data' , data , params) ;

if(bindFn){

    return bindFn(data , params) ;
}