/**
 * 
 * 单次订阅
 * 
 * @import assign from object.assign
 * 
 * @import getName from .subscribe.name
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
    } = me,
    {
        connectionId
    } = options;

    if(me.isSubscribed(name , connectionId)){

        return subscribers.get(fullName);
    }

    let subscriber = me.createSubscriber(name , assign({} , convertNameToSubscriberOptions.call(me , name) , options)) ;

    subscribers.set(getName(name , connectionId) , subscriber) ;

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