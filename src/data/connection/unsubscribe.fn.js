
/**
 * 
 * 取消单次订阅
 * 
 * @import getName from .subscribe.name
 * 
 * @param {string} name 订阅名称
 * 
 * @param {string} [instanceId] 实例编号
 * 
 */

 if(instanceId){

    name = `${name}<${instanceId}>` ;
 }

 name = getName(name , instanceId) ;

let me = this,
    {
        subscribers
    } = me,
    subscriber = me.doSubscriberMethod(name , 'destroy') ;

if(subscriber){

    subscribers.delete(name) ;
}