/**
 * 
 * 基于数据连接的 React 封装
 * 
 * @import deploy from ..lifecycle
 * 
 * @import empty from function.empty value
 * 
 * @param {object} connections 订阅对象
 * 
 * @param {object} componentClass 组件定义对象
 * 
 * @return {mixed} 组件类引用
 * 
 * @non-standard
 * 
 */

class Component extends componentClass{

    constructor(props){

        super(props) ;

        let me = this ;

        let {
            mounted,
            unmounted
        } = deploy(connections , me , '') ;

        const {
            componentDidMount:originMounted = empty,
            componentWillUnmount:originUnmounted = empty
         } = me;

         me.componentDidMount = () =>{

            mounted.call(me) ;
           
            originMounted.call(me) ;
            
         } ;

         me.componentWillUnmount = () =>{

            originUnmounted.call(me) ;
    
            unmounted.call(me) ;
         } ;
    }
    
} ;

return props => <Component {...props} connections={connections}/> ;