
/**
 * 
 * Socket 订阅器
 * 
 * @import get from function.get
 * 
 * @import is.array
 * 
 * @import createMap from map
 * 
 * @import assign from object.assign
 * 
 * @import equals from object.equals
 * 
 * @class
 * 
 */

 class main {

    constructor(socket , id , options = {}){

        let me = this ;

        me.socket = socket ;

        me.id = id ;

        let {
            autoOpen = true,
            params,
            saveLastMessage = true
        } = options ;

        if(saveLastMessage === false){

            me.data = [] ;
        }
        
        me.callbacks = createMap() ;

        me.originParams = false ;

        me.options = options ;

        if(autoOpen){

            me.open(params) ;
        }
    }

    get opened(){

        return !! this.originParams ;
    }

    /**
     * 
     * 打开通道
     * 
     */
    open(params = {}){

        let me = this,
        {
            opened,
            originParams,
            id,
            socket
        } = me;

        if(!opened || !equals(originParams , params)){

            let options = assign({} , me.processID(id) , params) ;

            socket.trySubscribe(me.generateRemoteParams(options)) ;

            me.params = me.generateLocalParams(options) ;

            me.originParams = params ;
        }
    }

    close(){

        let me = this,
        {
            closable = true
        } = me.options ;

        if(closable === false){

            return false ;
        }
        
        let {
            id,
            opened,
            originParams,
            socket,
            callbacks
        } = me ;

        if(opened){

            socket.tryUnsubscribe(me.generateRemoteParams(assign({} , me.processID(id) , originParams))) ;
        }

        callbacks.clear() ;

        return true ;
    }

    generateInitParams(){


    }

    /**
     * 
     * 生成远程订阅参数
     * 
     * @param {mixed} params 订阅参数
     * 
     * @return {mixed} 远程订阅参数 
     * 
     */
    generateRemoteParams(params){

        return params ;
    }
     /**
     * 
     * 生成本地订阅参数
     * 
     * @param {mixed} params 订阅参数
     * 
     * @return {mixed} 远程订阅参数 
     * 
     */
    generateLocalParams(params){

        return params ;
    }

    /**
     * 
     * 根据订阅器名称得到额外的订阅参数
     * 
     * @param {string} id 订阅器编号 
     * 
     */
    processID(id){

        return {} ;
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
    processData(message){

        return message ;
    }

    /**
     * 
     * 校验推送数据是否满足当前订阅的要求
     * 
     * @param {mixed} msg 数据
     * 
     * @return {boolean} 如果检验数据成功则返回 true , 否则返回 false
     * 
     */
    validate(msg){

        return false ;
    }

    /**
     * 
     * 将订阅推送过来的数据注入到订阅器
     * 
     * @param {mixed} data 
     * 
     */
    accept(message){

        let me = this,
        {
            data
        } = me;

        message = me.processData(message) ;

        if(isArray(data)){

            data.push(message) ;
        
        }else{

            me.data = message ;
        }

        let {
            callbacks
        } = me ;

        callbacks.forEach(fn => fn(message)) ;
    }

    /**
     * 
     * 将注入到订阅器的数据推送给函数
     * 
     * @param {mixed} fn 函数
     * 
     * @param {mixed} scope 函数作用域
     * 
     */
    bind(fn , scope){

        let me = this,
            {
                callbacks
            } = me,
            bindFn = get(fn , scope),
            {
                data
            } = me;

        callbacks.set(fn , scope , bindFn) ;

        if(isArray(data)){

            for(let message of data){

                bindFn(message) ;
            }

        }else if(data){

            bindFn(data) ;
        }
    }

    /**
     * 
     * 解除函数绑定
     * 
     * @param {function} fn
     *  
     * @param {mixed} scope
     * 
     */
    unbind(fn , scope){

        let {
            callbacks
        } = this; 

        callbacks.delete(fn , scope) ;
    }
 }