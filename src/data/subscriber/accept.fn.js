
/**
 * 
 * 接收数据
 * 
 * @import is.defined
 * 
 * @import clone from json.clone
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
    name,
    cache
} = me;

if(closed){

    return;
}

if(!isDefined(data)){

    return;
}

if(cache){

    me.cacheData = clone(data) ;   
}

me.fireEvent('data' , data , params) ;

if(bindFn){

    return bindFn(data , params) ;
}