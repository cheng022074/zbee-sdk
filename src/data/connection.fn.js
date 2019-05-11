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
 * @import is.function
 * 
 * @import Subscriber from data.subscriber value
 * 
 * @import create from class.create
 * 
 * @require regex-parser
 * 
 * @class
 * 
 */

const createRegex = require("regex-parser"); 

 class main extends mixins({
     mixins:[
        Observable
     ]
 }){

    constructor({
        subscriber = Subscriber,
        rules
    } = {}){

        super() ;

        let me = this ;

        me.rules = me.createRules(rules) ;

        me.subscribers = new Map() ;

        me.subscriber = subscriber ;
    }

    /**
     * 
     * 构建规则集合
     * 
     * 
     * @param {object} rules 规则配置
     * 
     * @return {Map} 规则集合
     */
    createRules(rules){

        let map = new Map(),
            regexs = Object.keys(rules) ;

        for(let regex of regexs){

            let fn = rules[regex] ;

            if(isFunction(fn)){

                map.set(createRegex(regex) , fn) ;
            }
        }

        return map ;
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
            connect:'onSubscriberConnect',
            disconnect:'onSubscriberDisconnect',
            scope:this
        } ;
    }

    onSubscriberConnect(subscriber , params){

        console.log('订阅' , subscriber , params) ;
    }

    onSubscriberDisconnect(subscriber){

        console.log('退订' , subscriber) ;
    }

    /**
     * 
     * 将订阅名称根据预定义的规则转换成订阅器配置
     * 
     * @param {string} name 订阅名称
     * 
     * @return {object} 订阅器配置
     * 
     */
    convertNameToSubscriberOptions(name){

        let {
            rules
        } = this,
        keys = rules.keys();

        for(let key of keys){

            let args = name.match(key) ;

            if(args){

                return rules.get(key)(...args) ;
            }
        }
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
     * 将订阅器与一个具体的函数进行连接
     * 
     * @param {string} name 订阅器名称 
     * 
     * @param {mixed} fn 连接函数 
     * 
     * @param {mixed} scope 连接函数作用域
     *  
     */
    bind(name , fn , scope){

        this.doSubscriberMethod(name , 'bind' , fn , scope) ;
    }

    /**
     * 
     * 将订阅器与一个具体的函数解除连接
     * 
     * @param {string} name 订阅器名称 
     * 
     * @param {mixed} fn 连接函数 
     * 
     * @param {mixed} scope 连接函数作用域
     * 
     */
    unbind(name , fn , scope){

        this.doSubscriberMethod(name , 'unbind' , fn , scope) ;
    }

    /**
     * 
     * 打开指定订阅通道
     * 
     * @param {string} name  订阅名称
     * 
     * @param {mixed} [params] 订阅参数
     * 
     */
    connect(name , params){

       this.doSubscriberMethod(name , 'connect' , params) ;
    }

    /**
     * 
     * 关闭指定订阅通道
     * 
     * @param {string} name  订阅名称
     * 
     */
    disconnect(name){

        this.doSubscriberMethod(name , 'disconnect') ;
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

        let baseOptions = me.convertNameToSubscriberOptions(name);

        if(baseOptions){

            let subscriber = me.createSubscriber(name , assign(baseOptions , options , {
                listeners:subscriberListeners
            })) ;

            subscribers.set(name , subscriber) ;
        
        }else{

            throw new Error(`无效的订阅名称 ${name}`) ;
        }
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

            subscriber.destroy() ;

            me.subscribers.delete(subscriber) ;
        }
    }
 }