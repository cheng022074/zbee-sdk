/**
 * 
 * 数据连接基础类
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.string
 * 
 * @import is.function
 * 
 * @import Subscriber from data.subscriber value
 * 
 * @import get from function.get
 * 
 * @require regex-parser
 * 
 * @class
 * 
 */

 class main{

    constructor(){

        this.subscribers = new Map() ;
    }

    processData(message){

        return message ;
    }

    processSubscribeParams(subscriber , params){

        return [
            params
        ] ;
    }

    /**
     * 
     * 构建订阅器
     * 
     * @param {mixed} params 订阅器参数
     * 
     * @return {data.Subscriber} 订阅器
     * 
     */
    createSubscriber(...args){

        return new Subscriber(...args) ;
    }

    get subscriberListeners(){

        return {
            open:'onSubscriberOpen',
            close:'onSubscriberClose',
            scope:this
        } ;
    }

    onSubscriberOpen(subscriber , params){

        let me = this;

        me.doSubscriberOpen(subscriber , ...me.processSubscribeParams(subscriber , params)) ;
    }

    doSubscriberOpen(subscriber , ...args){


    }

    onSubscriberClose(subscriber , params){

        let me = this;

        me.doSubscriberClose(subscriber , ...me.processSubscribeParams(subscriber , params)) ;
    }

    doSubscriberClose(subscriber , ...args){


    }

    /**
     * 
     * @param {string} name 订阅器名称
     *  
     * @param {string} method 订阅器方法名称
     *  
     * @param  {mixed} ...args 订阅器方法参数
     */
    doSubscriberMethod(name , method , ...args){

        let me = this,
        {
            subscribers
        } = me,
        subscriber = subscribers.get(name);

        if(subscriber){

            subscriber[method](...args) ;

            return subscriber ;
        }
    }

    /**
     * 
     * 批量订阅
     * 
     */
    subscribes({
        scope,
        ...subscribers
    }){

        let names = Object.keys(subscribers),
            me = this,
            result = [];

        for(let name of names){

            let target = subscribers[name] ;

            if(isString(target) || isFunction(target)){

                let subscriber = me.subscribe(name) ;

                subscriber.bind(get(subscribers[name] , scope) , scope) ;

                result.push(subscriber) ;
            
            }else if(isObject(target)){

                let {
                    fn,
                    scope:currentScope,
                    listeners = {},
                    ...options
                } = target ;

                currentScope = currentScope || scope ;

                listeners.scope = currentScope ;

                let subscriber = me.subscribe(name , {
                    listeners,
                    ...options
                }) ;

                subscriber.bind(fn , currentScope) ;

                result.push(subscriber) ;
            }
        }
    }

    /**
     * 
     * 批量取消订阅
     * 
     */
    unsubscribes(names){

        let me = this;

        for(let name of names){

           me.unsubscribe(name) ;
        }
    }

    /**
     * 
     * 订阅
     * 
     * @param {string} name 订阅名称
     * 
     * @param {object} [options = {}] 订阅参数
     * 
     * @return {data.connection.Subscribe} 成功订阅后的获得的订阅器
     * 
     */
    subscribe(name , options = {}){



        let me = this,
        {
            subscribers,
            subscriberListeners
        } = me,
        {
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

        subscribers.set(name , subscriber) ;

        if(autoOpen){

            subscriber.open(params) ;
        }

        return subscriber ;
        
    }

    /**
     * 
     * 取消订阅
     * 
     * @param {string} name 订阅名称
     *  
     */
    unsubscribe(name){

        let me = this,
            subscriber = me.doSubscriberMethod(name , 'destroy') ;

        if(subscriber){

            me.subscribers.delete(subscriber) ;
        }
    }
 }