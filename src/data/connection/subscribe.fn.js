/**
 * 
 * 单次订阅
 * 
 * @import assign from object.assign
 * 
 * @import getName from .subscribe.name
 * 
 * @import generate from .subscribe.namespace.generate
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
        namespace
    } = options;

    if(me.isSubscribed(name , namespace)){

        if(namespace){

            return subscribers.get(fullName);
        
        }else{

            namespace = generate(name) ;
        }
    }

    let fullName = getName(name , namespace),
        subscriber = me.createSubscriber(name , assign({} , convertNameToSubscriberOptions.call(me , name) , {
            ...options,
            fullName
        })) ;

    subscribers.set(fullName , subscriber) ;

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