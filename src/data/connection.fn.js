/**
 * 
 * 数据连接基础类
 * 
 * @import Observable from mixin.observable
 * 
 * @import assign from object.assign
 * 
 * @import is.string
 * 
 * @import is.class
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.function
 * 
 * @import isObject from is.object.simple
 * 
 * @import Subscriber from data.subscriber value
 * 
 * @import create from class.create
 * 
 * @import getKeys from object.keys
 * 
 * @import getValue from object.value.get
 * 
 * @require regex-parser
 * 
 * @class
 * 
 */

const createRegex = require('regex-parser'); 

 class main extends mixins({
     mixins:[
        Observable
     ]
 }){

    constructor({
        subscriber = Subscriber
    } = {}){

        super() ;

        let me = this ;

        me.subscribers = new Map() ;

        me.subscriber = subscriber ;
    }

    processData({
        data
    }){

        return data ;
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

        let {
            subscriber
        } = this;

        return create(subscriber , ...args) ;
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
            me = this;

        for(let name of names){

            let target = subscribers[name] ;

            if(isFunction(target)){

                let subscriber = me.subscribe(name) ;

                subscriber.bind(target , scope) ;
            
            }else if(isObject(target)){

                let {
                    fn,
                    scope:currentScope,
                    listeners = {},
                    options
                } = target ;

                currentScope = currentScope || scope ;

                let subscriber = me.subscribe(name , options) ;

                listeners.scope = currentScope ;

                subscriber.addListeners(listeners) ;

                subscriber.bind(fn , currentScope) ;
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
        } = me;

        if(subscribers.has(name)){

            return subscribers.get(name) ;
        }
        
        let subscriber = me.createSubscriber(name , assign({} , options , {
            subscriberListeners
        })) ;

        subscribers.set(name , subscriber) ;

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
            subscriber = me.doSubscriberMethod(name , 'close') ;

        if(subscriber){

            me.subscribers.delete(subscriber) ;
        }
    }
 }