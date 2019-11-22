
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
    cache,
    processAcceptData,
    cacheAcceptData
} = me;

if(closed){

    return;
}

data = processAcceptData(data) ;

if(isDefined(data)){

    me.cache = cacheAcceptData(data , cache) ;

    let result = bindFn(data , params) ;

    me.fireEvent('data' , data , params) ;

    return  result;
}