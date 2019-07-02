
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
    bindCallbacks,
    params
} = me,
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

me.recentData = {
    data,
    params
} ;

return results ;