
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

 const nameRe = /\<|\>/g ;

function main(name , {
    connectionId,
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

    let fullName = getName(name , connectionId),
        subscriber = me.createSubscriber(fullName , assign({} , convertNameToSubscriberOptions.call(me , name) , options)) ;

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