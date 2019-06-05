
/**
 * 
 * 单次订阅
 * 
 * @param {string} name 订阅名称
 * 
 * @param {object} [options = {}] 订阅配置
 * 
 */

let me = this,
{
    subscribers,
    subscriberListeners
} = me,
{
    fn,
    scope,
    params,
    listeners = {},
    autoOpen = true,
    ...currentOptions
} = options;

if(subscribers.has(name)){

    return subscribers.get(name) ;
}

let subscriber = me.createSubscriber(name , currentOptions) ;

subscriber.addListeners(subscriberListeners) ;

subscriber.addListeners(listeners) ;

subscribers.set(name , subscriber) ;

if(fn){

    subscriber.bind(fn , scope) ;
}

if(autoOpen){

    subscriber.open(params) ;
}

return subscriber ;