
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
 * @param {data.connection.Socket} socket socket 对象
 * 
 * @class
 * 
 */

 class main {

    constructor(socket , {
        id,
        ...options
    }){

        let me = this ;

        me.socket = socket ;

        let {
                params = {},
                saveLastMessage = true
            } = assign(options , me.getExtraOptions(id)) ;

        if(saveLastMessage === false){

            me.data = [] ;
        }
        
        me.params = params ;

        me.callbacks = createMap() ;

        me.opened = false ;
    }

    /**
     * 
     * 打开通道
     * 
     */
    open(){

        let {
            socket,
            remoteParams
        } = this ;

        socket.trySubscribe(remoteParams) ;
    }

    /**
     * 
     * 根据订阅器名称得到额外的订阅参数
     * 
     * @param {string} id 订阅器编号 
     * 
     */
    getExtraOptions(id){

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

    /**
     * 
     * 判断是否还有绑定
     * 
     * @return {boolean} 如果绑定成功则返回 true , 否则返回 false
     * 
     */
    get hasBinding(){

        return this.callbacks.size !== 0;
    }

    /**
     * 
     * 返回实际的订阅参数
     * 
     * @return {object}
     * 
     */
    get remoteParams(){

        return this.params ;
    }
 }