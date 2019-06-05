
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

let {
    closed,
    bindCallbacks,
    accumulationMode,
    cache,
    params
} = this,
results = [];

if(closed){

    return results;
}

bindCallbacks.forEach(callback => {

    let result = callback(data , params) ;

    if(isDefined(result)){

        results.push(result) ;
    }

}) ;

if(accumulationMode === false){

    cache.length = 0 ;
}

cache.push({
    params,
    data
}) ;

return results ;