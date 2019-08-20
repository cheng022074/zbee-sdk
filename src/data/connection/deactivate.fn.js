
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
} = me,
subscribedParamList = [];

for(let params of subscribeParamList){

    if(!includes(subscribedParamList , params)){

        subscribedParamList.push(params) ;
            
        me.doSubscriberClose(...params) ;
    }
}