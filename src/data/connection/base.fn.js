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
 * @import is.boolean
 * 
 * @import is.array
 * 
 * @import Subscriber from data.subscriber value
 * 
 * @import get from function.get
 * 
 * @import create from class.create
 * 
 * @import includes from array.includes
 * 
 * @import indexOf from array.indexOf
 * 
 * @import remove from array.remove.index
 * 
 * @import getName from .subscribe.name
 * 
 * @import Observable from mixin.observable
 * 
 * @import add from event.listener.add
 * 
 * @require regex-parser
 * 
 * @class
 * 
 */

 const createRegex = require('regex-parser'); 

 function createRules(rules){

    let result = [] ;

    for(let {
        test,
        use
    } of rules){

        if(isFunction(use)){

            result.push({
                test:createRegex(test),
                use
            }) ;
        }
    }

    return result ;
 }

 class main extends mixins({
     mixins:[
        Observable
     ]
 }){

    constructor({
        subscriber = Subscriber,
        rules = []
    }){

        super() ;

        let me = this ;

        me.subscriber = subscriber ;

        me.subscribers = new Map() ;

        me.rules = createRules(rules) ;

        me.subscribeParamList = [] ;

        add(me , {
            ...me.subscriberListeners,
            scope:me
        }) ;
    }

    processMessage(...args){

        return {} ;
    }

    processData(subscriber , message){

        return subscriber.processData(message) ;
    }

    validateMessage(subscriber , message){

        return true ;
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
     * @param {string} name  订阅名称 
     * 
     * @param {mixed} options 订阅器参数
     * 
     * @return {data.Subscriber} 订阅器
     * 
     */
    createSubscriber(name , options){

        let me = this,
        {
            subscriber
        } = me ;

        return create(subscriber , me , name , options) ;
    }

    onCreateSubscriber(subscriber){


    }

    get subscriberListeners(){

        return {
            open:'onSubscriberOpen',
            close:'onSubscriberClose'
        } ;
    }

    onSubscriberOpen(subscriber , params){

        let me = this;

        params = me.processSubscribeParams(subscriber , params) ;

        if(isArray(params)){

            let  {
                subscribeParamList
            } = me ;

            if(!includes(subscribeParamList , params)){
                
                me.doSubscriberOpen(...params) ;
            }
    
            subscribeParamList.push(params) ;

        }
    }

    doSubscriberOpen(...args){


    }

    onSubscriberClose(subscriber , params){

        let me = this ;

        params = me.processSubscribeParams(subscriber , params) ;

        if(isArray(params)){

            let {
                subscribeParamList
            } = me,
            index = indexOf(subscribeParamList , params);

            if(index === -1){
    
                return ;
            }
    
            remove(subscribeParamList , index) ;

            if(!includes(subscribeParamList , params)){

                me.doSubscriberClose(...params) ;
            }
        }

    }

    doSubscriberClose(...args){


    }

    getSubscribers(names , instanceId){

        let subscribers = [],
            me = this;

        for(let name of names){

            let subscriber = me.getSubscriber(name , instanceId) ;

            if(subscriber){

                subscribers.push(subscriber) ;
            }
        }

        return subscribers ;
    }

    getSubscriber(name , instanceId){

        return this.subscribers.get(getName(name , instanceId)) ;
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
 }