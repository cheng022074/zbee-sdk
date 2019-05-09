/**
 * 
 * 基于数据连接的 React 封装
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @param {object} mixins Socket 对象
 * 
 * @param {mixed} componentClass 组件类引用
 * 
 * @return {mixed} 组件类引用 
 * 
 */

 const {
     socket,
     ajax
 } = mixins ;

return class extends componentClass{

    constructor(...args){

        super(...args) ;

        this.connection_subscribed = false ;
    }

    componentDidMount() {

        let me = this,
        {
            connection_subscribed
        } = me;

        if(!connection_subscribed){

            {
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
        
                        result[id] =  socket.subscribe(id , params , options).bind(fn , me) ;
                    }
                }
        
                me.subscribers = result ;
            }

            {
                let {
                    loaders = {}
                } = me ;
        
                let urls = Object.keys(loaders),
                    result = {};
        
                for(let url of urls){
        
                    let loader = loaders[url] ;
        
                    if(isString(loader)){
        
                        result[url] = ajax.load(url).bind(loader , me) ;
                    
                    }else if(isObject(loader)){
        
                        let {
                            fn,
                            params,
                            ...options
                        } = loader ;
        
                        result[id] =  ajax.load(id , params , options).bind(fn , me) ;
                    }
                }
        
                me.loaders = result ;
            }

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
            connection_subscribed
        } = me;

        if(connection_subscribed){

            let {
                subscribers = {}
            } = me,
            ids = Object.keys(subscribers) ;
    
            for(let id of ids){
    
                socket.unsubscribe(id) ;
            }

            me.connection_subscribed = false ;
        }
    }
    
} ;