
/**
 * 
 * Socket 消息机
 * 
 * @import get from object.get
 * 
 * @import createMap from object.map
 * 
 * @param {mixed} options Socket 初始化配置
 * 
 * @class
 * 
 */

 class main{

    constructor(options){

        let me = this;

        me.init(options) ;

        me.subscriberMap = createMap() ;

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
     * @param {mixed} msg 接收消息
     * 
     */
    acceptMessage(...args){

        let me = this ;

        msg = me.processMessage(...args);

        if(me.isAcceptMessage(msg) === false){

            return  ;
        }

        let {
            subscribers
        } = me ;

        subscribers.forEach(subscriber =>{

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
     * 针对消息进行处理
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
     * 根据订阅参数获取订阅器
     * 
     * @param {object} params 订阅参数  
     */

    getSubscriber(params){

        let me = this,
        {
            subscriberMap
        } = this ;

        if(!subscriberMap.has(params)){

            subscriberMap.set(params , me.createSubscriber(params)) ;
        }

        return subscriberMap.get(params) ;
    }

    removeSubscriber(params){

        let me = this,
        {
            subscriberMap
        } = this;

        if(subscriberMap.has(params)){

            let subscriber = subscriberMap.get(params) ;

            subscriberMap.delete(params) ;

            return subscriber ;
        }
    }

    /**
     * 
     * 创建订阅器
     * 
     * @param {mixed} params 订阅参数
     * 
     * @return {data.connection.socket.Subscriber} 订阅器
     * 
     */
    createSubscriber(params){
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
     * 处理订阅参数
     * 
     * @param  {mixed} ...args 订阅参数
     *  
     */
    processSubscribeParams(...args){

        return {} ;
    }

    /**
     * 
     * 是否可以远程订阅
     * 
     * @param {mixed} remoteParams 订阅参数
     * 
     */
    isCanRemoteSubscribe(remoteParams){

        return false ;
    }

    /**
     * 
     * 是否可以远程取消订阅
     * 
     * @param {mixed} remoteParams 订阅参数
     * 
     */
    isCanRemoteUnsubscribe(remoteParams){

        return false ;
    }

    /**
     * 
     * 尝试订阅
     * 
     * @param {mixed} remoteParams 订阅参数
     * 
     */
    trySubscribe(remoteParams){

        let me = this ;

        if(me.isCanRemoteSubscribe(remoteParams)){

            let {
                remoteParamsMap
            } = me ;
    
            if(!remoteParamsMap.has(remoteParams)){
    
                remoteParamsMap.set(remoteParams , remoteParams) ;
    
                me.doSubscribe(remoteParams) ;
            }
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

        let me = this ;

        if(me.isCanRemoteUnsubscribe(remoteParams)){

            let {
                remoteParamsMap
            } = me ;
    
            remoteParamsMap.delete(remoteParams) ;
    
            if(!remoteParamsMap.has(remoteParams)){
    
                me.doUnsubscribe(remoteParams) ;
            }
        }
    }

    /**
     * 
     * 订阅
     * 
     */
    subscribe(...args){

        let me = this,
        {
            remoteParams
        } = me.getSubscriber(me.processSubscribeParams(...args)) ;

        me.trySubscribe(remoteParams) ;
    }

    /**
     * 
     * 取消订阅
     * 
     * 
     */
    unsubscribe(...args){

        let me = this,
            subscriber = me.removeSubscriber(me.processSubscribeParams(...args)) ;

        if(subscriber){

            me.tryUnsubscribe(subscriber.remoteParams) ;
        }
    }
 }