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
 * @non-standard
 * 
 */

 const {
     socket,
     ajax
 } = mixins;

class Component extends componentClass{

    constructor(props){

        super(props) ;

        
    }

    componentDidMount() {

        let me = this;

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

            me.loaders = ajax.subscribes({
                ...loaders,
                scope:me
            }) ;
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
            subscribers = {},
            loaders = {}
        } = me;

        if(socket){

            socket.unsubscribes({
                ...subscribers,
                scope:me
            }) ;
        }

        if(ajax){

            ajax.unsubscribes({
                ...loaders,
                scope:me
            }) ;
        }
    }
    
} ;

return props => <Component {...props} socket={socket} ajax={ajax}/> ;