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
 * @import Subscriber from data.subscriber value
 * 
 * @import get from function.get
 * 
 * @import create from class.create
 * 
 * @import assign from object.assign
 * 
 * @require regex-parser
 * 
 * @class
 * 
 */

 const createRegex = require('regex-parser'); 

 class main{

    constructor({
        subscriber = (name , options) =>{

            return new Subscriber(name , options) ;
        },
        rules = []
    }){

        let me = this ;

        me.subscriber = subscriber ;

        me.subscribers = new Map() ;

        me.rules = me.createRules(rules) ;
    }

    /**
     * 
     * 构建规则集合
     * 
     * 
     * @param {object} rules 规则配置
     * 
     * @return {Map} 规则集合
     * 
     */
    createRules(rules){

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

    processMessage(...args){

        return {} ;
    }

    processData({
        data
    } , subscriber){

        return data ;
    }

    validateMessage(subscriber , message){

        return true ;
    }

    /**
     * 
     * 接收消息
     * 
     * @param  {mixed} [...args] 消息参数
     * 
     */
    acceptMessage(...args){

        let me = this,
            message = me.processMessage(...args),
            {
                subscribers
            } = me;

        for(let subscriber of subscribers){

            if(me.validateMessage(subscriber , message)){

                subscriber.accept(me.processData(subscriber , message)) ;
            }
        }
    }

    processSubscribeParams(subscriber , params){

        return [
            params
        ] ;
    }

    convertNameToSubscriberOptions(name){

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

        let {
            subscriber
        } = this ;

        return create(subscriber , name , assign(me.convertNameToSubscriberOptions(name) , options)) ;
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
 }