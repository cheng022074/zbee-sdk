
/**
 * 
 * 取消单次订阅
 * 
 * @param {string} name 订阅名称
 * 
 * @param {string} [instanceId] 实例编号
 * 
 */

 if(instanceId){

    name = `${name}<${instanceId}>` ;
 }

let me = this,
    {
        subscribers
    } = me,
    subscriber = me.doSubscriberMethod(name , 'destroy') ;

if(subscriber){

    subscribers.delete(name) ;
}