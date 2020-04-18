
/**
 * 
 * 冻结
 * 
 * @import includes from array.includes
 * 
 */

let me = this,
{
    subscribeParamList
} = me;

for(let params of subscribeParamList){

    me.doSubscriberClose(...params) ;
}