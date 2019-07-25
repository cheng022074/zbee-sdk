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
 * @import remove from array.remove.index
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

        me.rules = createRules(rules) ;

        me.subscribeParamList = [] ;
    }

    processMessage(...args){

        return {} ;
    }

    processData(subscriber , {
        data
    }){

        return data ;
    }

    validateMessage(subscriber , message){

        return true ;
    }


    processSubscribeParams(subscriber , params , operation){

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

        return create(subscriber , name , options) ;
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

        let me = this,
        {
            subscribeParamList
        } = me;

        params = me.processSubscribeParams(subscriber , params , 'open') ;

        if(includes(subscribeParamList , params)){

            return ;
        }

        subscribeParamList.push(params) ;

        if(isArray(params)){

            me.doSubscriberOpen(subscriber , ...params) ;
        }
    }

    doSubscriberOpen(subscriber , ...args){


    }

    onSubscriberClose(subscriber , params){

        let me = this;

        params = me.processSubscribeParams(subscriber , params , 'close') ;

        if(includes(subscribeParamList , params)){

            return ;
        }

        subscribeParamList.push(params) ;

        if(isArray(params)){

            me.doSubscriberClose(subscriber , ...params) ;
        }

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