
/**
 * 
 * 单次订阅
 * 
 * @import assign from object.assign
 * 
 * @param {string} name 订阅名称
 * 
 * @param {object} [options = {}] 订阅配置
 * 
 */

function main(name , options){

    let me = this ;

    options = assign({} , convertNameToSubscriberOptions.call(me , name) , options) ;

    let {
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
}

function convertNameToSubscriberOptions(name){

    let {
        rules
    } = this;

    for(let {
        test,
        use
    } of rules){

        let args = name.match(test) ;

        if(args){

            return use(...args) ;
        }
    }

    return {} ;
 }