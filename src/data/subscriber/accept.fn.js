
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
    params,
    connection,
    name
} = me;

if(closed){

    return;
}

if(!isDefined(data)){

    return;
}

me.fireEvent('data' , data , params) ;

if(bindFn){

    return bindFn(data , params) ;
}