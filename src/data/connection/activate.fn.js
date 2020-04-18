
/**
 * 
 * 激活
 * 
 * @import includes from array.includes
 * 
 */

let me = this,
{
    subscribeParamList
} = me;

for(let params of subscribeParamList){

    me.doSubscriberOpen(...params) ;
}