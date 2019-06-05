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
 * @import create from class.create
 * 
 * @require regex-parser
 * 
 * @class
 * 
 */

 class main{

    constructor({
        subscriber = (name , options) =>{

            return new Subscriber(name , options) ;
        }
    }){

        let me = this ;

        me.subscriber = subscriber ;

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

        let {
            subscriber
        } = this ;

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
            me = this,
            result = {};

        for(let name of names){

            let target = subscribers[name],
                subscriber;

            if(isString(target) || isFunction(target)){

                subscriber = me.subscribe(name).bind(get(subscribers[name] , scope) , scope) ;
            
            }else if(isObject(target)){

                let {
                    fn,
                    scope:currentScope,
                    listeners = {},
                    ...options
                } = target ;

                currentScope = currentScope || scope ;

                listeners.scope = listeners.scope || currentScope ;

                subscriber = me.subscribe(name , {
                    fn,
                    scope:currentScope,
                    listeners,
                    ...options
                }) ;
            }

            if(subscriber){

                result[name] = subscriber ;
            }
        }

        return result ;
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
 }