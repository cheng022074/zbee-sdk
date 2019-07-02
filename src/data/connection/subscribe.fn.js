
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

    let me = this,
    {
        subscribers
    } = me;

    if(subscribers.has(name)){

        return ;
    }

    options = assign({} , convertNameToSubscriberOptions.call(me , name) , options) ;

    let {
        subscriberListeners
    } = me;

    let subscriber = me.createSubscriber(name , {
        ...options,
        innerListeners:{
            ...subscriberListeners,
            scope:me
        }
    }) ;

    subscribers.set(name , subscriber) ;

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