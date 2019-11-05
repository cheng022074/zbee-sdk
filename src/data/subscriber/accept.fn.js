
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

if(bindFn){

    let result = bindFn(data , params) ;
    
    me.fireEvent('data' , data , params) ;

    return  result;
}