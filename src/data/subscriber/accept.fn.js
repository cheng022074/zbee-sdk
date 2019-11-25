
/**
 * 
 * 接收数据
 * 
 * @import is.defined
 * 
 * @import setData from .accept.data scoped
 * 
 * @param {mixed} data 数据
 * 
 * 
 */

let me = this,
{
    closed,
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

    setData(data) ;
}