
/**
 * 
 * Socket 消息机
 * 
 * @import get from object.get
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

        me.subscribers = new Map() ;
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
     * @return {mixed}
     *  
     */
    processMessage(...args){

        return {} ;
    }

    get subscribeParamNames(){

        return [] ;
    }

    /**
     * 
     * 根据参数生成一个唯一的键值
     * 
     * @param {mixed} params 订阅参数
     * 
     * @return {string} 
     */
    generateSubscriberKey(params){

        let keys = this.subscribeParamNames,
            result = [];

        for(let key of keys){

            let value = get(params , key) ;

            result.push(`${key}=${JSON.stringify(value)}`) ;
        }

        return result.join('&') ;
    }

    /**
     * 
     * 判断指定指阅参数是否还有订阅器在使用
     * 
     * @param {mixed} params 远程订阅参数
     * 
     * @return {boolean} 如果还有订阅器在使用则返回 true , 否则返回 false
     *  
     */
    hasSubscribeRemoteParams(params){

        let me = this,
        {
            subscribers
        } = me,
        key = me.generateSubscriberKey(params);

        subscribers = subscribers.values() ;

        for(let subscriber of subscribers){

            if(me.generateSubscriberKey(subscriber.remoteParams) === key){

                return true ;
            }
        }

        return false ;
    }

    /**
     * 
     * 根据订阅参数获得订阅器
     * 
     * @param {mixed} params 订阅参数
     * 
     * @return {data.connection.socket.Subscriber} 订阅器
     * 
     */
    getSubscriber(params){

        let me = this,
            key = me.generateSubscriberKey(params),
            {
                subscribers
            } = me;

        if(!subscribers.has(key)){

            subscribers.set(key , me.createSubscriber(params)) ;
        }

        return subscribers.get(key) ;
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
     * 根据订阅参数获得订阅器
     * 
     * @param {mixed} params 订阅参数
     * 
     * @return {data.connection.socket.Subscriber} 订阅器
     * 
     */
    removeSubscriber(params){

        let me = this,
            key = me.generateSubscriberKey(params),
            {
                subscribers
            } = me;

        if(subscribers.has(key)){

            let subscriber = subscribers.get(key) ;

            subscribers.delete(key) ;

            return subscriber ;
        }
    }

    /**
     * 
     * 订阅参数至服务器
     * 
     * @param {mixed} params 订阅参数
     * 
     */
    doSubscribe(params){
    }

    /**
     * 
     * 取消订阅参数至服务器
     * 
     * @param {mixed} params 订阅参数 
     * 
     */
    doUnsubscribe(params){
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
     * 订阅
     * 
     */
    subscribe(...args){

        let me = this,
            {
                remoteParams
            } = me.getSubscriber(me.processSubscribeParams(...args)) ;

        me.doSubscribe(remoteParams) ;
    }

    /**
     * 
     * 取消订阅
     * 
     * 
     */
    unsubscribe(...args){

        let me = this,
            {
                remoteParams
            } = me.removeSubscriber(me.processSubscribeParams(...args)) ;

        if(!me.hasSubscribeRemoteParams(remoteParams)){

            me.doUnsubscribe(remoteParams) ;
        }
    }
 }