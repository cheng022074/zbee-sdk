
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

 const nameRe = /\<|\>/g ;

function main(name , {
    instanceId,
    ...options
}){

    name = name.replace(nameRe , '') ;

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

    if(instanceId){

        name = `${name}<${instanceId}>` ;
    }

    let subscriber = me.createSubscriber(name , {
        ...options,
        innerListeners:{
            ...subscriberListeners,
            scope:me
        }
    }) ;

    subscribers.set(name , subscriber) ;

    me.onCreateSubscriber(subscriber) ;

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