
/**
 * 
 * 取消单次订阅
 * 
 * @import getName from .subscribe.name
 * 
 * @param {string} name 订阅名称
 * 
 * @param {string} [connectionId] 实例编号
 * 
 */

 name = getName(name , connectionId) ;

let me = this,
    {
        subscribers
    } = me,
    subscriber = me.doSubscriberMethod(name , 'destroy') ;

if(subscriber){

    subscribers.delete(name) ;
}