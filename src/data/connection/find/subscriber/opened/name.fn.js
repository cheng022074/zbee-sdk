
/**
 * 
 * 获得一个指定名称的缴活订阅器
 * 
 * @param {string} name 订阅器名称
 * 
 * @param {data.Subscriber} [ignoreSubscriber] 忽略的订阅器
 * 
 * @return {data.Subscriber} 订阅器 
 * 
 */

 let subscribers = this.subscribers.values() ;

 for(let subscriber of subscribers){

    let {
        name:subscriberName
    } = subscriber ;

    if(subscriberName === name && subscriber !== ignoreSubscriber){

        return subscriber ;
    }
 }