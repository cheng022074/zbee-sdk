/**
 * 
 * 基于数据连接的 React 封装
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @param {data.connection.Socket} socket Socket 对象
 * 
 * @param {mixed} componentClass 组件类引用
 * 
 * @return {mixed} 组件类引用 
 * 
 */

return class extends componentClass{

    constructor(...args){

        super(...args) ;

        this.connection_socket_subscribed = false ;
    }

    componentDidMount() {

        let me = this,
        {
            connection_socket_subscribed
        } = me;

        if(!connection_socket_subscribed){

            let {
                subscribers = {}
            } = me ;
    
            let ids = Object.keys(subscribers),
                result = {};
    
            for(let id of ids){
    
                let subscriber = subscribers[id] ;
    
                if(isString(subscriber)){
    
                    result[id] = socket.subscribe(id).bind(subscriber , me) ;
                
                }else if(isObject(subscriber)){
    
                    let {
                        fn,
                        params,
                        ...options
                    } = subscriber ;
    
                    result[id] =  socket.subscribe(id , params , ...options).bind(subscriber , me) ;
                }
            }
    
            me.subscribers = result ;

            me.connection_socket_subscribed = true ;
        }

        if (super.componentDidMount) {

            super.componentDidMount();
        }
    }

    componentWillUnmount(){

        if (super.componentWillUnmount) {

            super.componentWillUnmount();
        }

        let me = this,
        {
            connection_socket_subscribed
        } = me;

        if(connection_socket_subscribed){

            let {
                subscribers = {}
            } = me,
            ids = Object.keys(subscribers) ;
    
            for(let id of ids){
    
                socket.unsubscribe(id) ;
            }

            me.connection_socket_subscribed = false ;
        }
    }
    
} ;