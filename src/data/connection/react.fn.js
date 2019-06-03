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

            if(socket){
                
                let {
                    subscribers = {}
                } = me ;

                me.subscribers = socket.subscribes({
                    ...subscribers,
                    scope:me
                }) ;
            }

            if(ajax){
        
                let {
                    loaders = {}
                } = me ;

                me.subscribers = ajax.subscribes({
                    ...loaders,
                    scope:me
                }) ;
            }

            me.connection_subscribed = true ;
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
                subscribers = {},
                loaders = {}
            } = me,
            {
                keys
            } = Object;

            if(socket){

                socket.unsubscribes(keys(subscribers)) ;
            }

            if(ajax){

                ajax.unsubscribes(keys(loaders)) ;
            }

            me.connection_subscribed = false ;
        }
    }
    
} ;