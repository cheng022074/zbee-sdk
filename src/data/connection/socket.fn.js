/**
 * 
 * Socket 消息机
 * 
 * @import get from object.value.get
 * 
 * @import createMap from object.map
 * 
 * @import Subscriber from data.connection.socket.subscriber value
 * 
 * @param {mixed} options Socket 初始化配置
 * 
 * @import is.class
 * 
 * @import is.string
 * 
 * @import is.function
 * 
 * @import is.defined
 * 
 * @import assign from object.assign
 * 
 * @class
 * 
 */

 class main{

    constructor({
        subscriber,
        ...options
    }){

        let me = this;

        me.subscriber = subscriber || Subscriber ;

        me.init(options) ;

        me.subscriberMap = new Map() ;

        me.remoteParamsMap = createMap() ;

    }

    /**
     * 
     * 初始化 Socket
     * 
     * @param {mixed} options 初始化 Socket 参数
     *  
     */
    init(options){

    }

    /**
     * 
     * 接收来自服务器端的消息推送,推送可能是配置式，也可能是参数式
     * 
     */
    acceptMessage(...args){

        let me = this,
            msg = me.processMessage(...args);

        if(me.isAcceptMessage(msg) === false){

            return  ;
        }

        let {
            subscriberMap
        } = me ;


        subscriberMap.forEach(subscriber =>{

            if(subscriber.validate(msg)){

                subscriber.accept(msg) ;
            }

        }) ;
    }

    /**
     * 
     * 判断给定消息是否可接受
     * 
     * @param {mixed} msg 消息
     * 
     * @return {boolean} 如果可接受消息则返回 true , 否则返回 false
     * 
     */
    isAcceptMessage(msg){

        return false ;
    }

    /**
     * 
     * 将消息处理成一个对象
     * 
     * @param {mixed} ...args 消息
     * 
     * @return {object}
     *  
     */
    processMessage(...args){

        return {} ;
    }

    /**
     * 
     * 创建订阅器
     * 
     * @param {string} id 订阅编号
     * 
     * @param {object} options 订阅配置参数
     * 
     * @return {data.connection.socket.Subscriber} 订阅器
     * 
     */
    createSubscriber(id , options){

        let me = this,
        {
            subscriber
        } = this ;

        if(isClass(subscriber)){

            return new subscriber(me , id , options) ;
        }

        if(isFunction(subscriber)){

            return subscriber(me , id , options) ;
        }

        if(isString(subscriber)){

            return include(subscriber)(me , id , options) ;
        }
    }

    /**
     * 
     * 订阅参数至服务器
     * 
     * @param {mixed} params 订阅参数
     * 
     */
    doSubscribe(remoteParams){
    }

    /**
     * 
     * 取消订阅参数至服务器
     * 
     * @param {mixed} params 订阅参数 
     * 
     */
    doUnsubscribe(remoteParams){
    }

    /**
     * 
     * 尝试订阅
     * 
     * @param {mixed} remoteParams 订阅参数
     * 
     */
    trySubscribe(remoteParams){

        let me = this,
        {
            remoteParamsMap
        } = me ;

        if(!remoteParamsMap.has(remoteParams)){

            remoteParamsMap.set(remoteParams , 1) ;

            me.doSubscribe(remoteParams) ;
        
        }else{

            remoteParamsMap.set(remoteParams , remoteParamsMap.get(remoteParams) + 1) ;
        }
    }

    /**
     * 
     * 尝试取消订阅
     * 
     * @param {mixed} remoteParams 订阅参数
     * 
     */
    tryUnsubscribe(remoteParams){

        let me = this,
            {
                remoteParamsMap
            } = me,
            count = remoteParamsMap.get(remoteParams);
    
        count -- ;

        if(count === 0){

            remoteParamsMap.delete(remoteParams) ;

            me.doUnsubscribe(remoteParams) ;
        
        }else{

            remoteParamsMap.set(remoteParams , count) ;
        }

       
    }

    /**
     * 
     * 订阅
     * 
     * @param {string} id 订阅唯一编号
     * 
     * @param {mixed} params 订阅参数
     * 
     */
    subscribe(id , params , options = {}){

        let me = this,
        {
            subscriberMap
        } = this;

        if(!subscriberMap.has(id)){

            subscriberMap.set(id , me.createSubscriber(id , {
                ...options,
                params
            })) ;
        }

        return subscriberMap.get(id)  ;
    }

    /**
     * 
     * 取消订阅
     * 
     * 
     */
    unsubscribe(id){
        
        let {
            subscriberMap
        } = this;

        if(subscriberMap.has(id)){

            let subscriber = subscriberMap.get(id) ;

            if(subscriber.close()){

                subscriberMap.delete(id) ;
            }
        }
    }
 }