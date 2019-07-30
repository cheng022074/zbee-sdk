
/**
 * 
 * 重新订阅
 * 
 * @import includes from array.includes
 * 
 */

let me = this,
{
    subscribeParamList
} = me,
subscribedParamList = [];

for(let params of subscribeParamList){

    if(!includes(subscribedParamList , params)){

        subscribedParamList.push(params) ;
            
        me.doSubscriberOpen(...params) ;
    }
}