/**
 * 
 * 基于 React 基于消息系统
 * 
 * @import getCenter from message.center
 * 
 * @import get from id.generate
 * 
 * @param {ReactDOM} ReactDOM ReactDOM 引用
 * 
 * @param {React.Component} reactClass 继承的 React 组件类
 * 
 * @param {string} [address] 组件注册的消息地址
 * 
 */

 let center = getCenter(),
     count = 1;

 return class extends reactClass{

    componentDidMount() {

        let me = this,
        {
            address:currentAddress
        } = me.props ;

        currentAddress = currentAddress || address || get('address-');

        let {
            $address
        } = me ;

        if($address){

            console.error('已拥有消息地址' , $address.name , currentAddress) ;

        }else{

            let messageAddress = center.register(currentAddress),
                isBind = messageAddress.bind(me) ;

            if(!isBind){

                console.error('消息地址已被注册' , currentAddress ,  ReactDOM.findDOMNode(me) , ReactDOM.findDOMNode(messageAddress.target)) ;

            }else{

                me.$address = messageAddress ;

            }
            
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
            $address:address
        } = me ;

        if(address){

            address.unbind() ;

            delete me.$address ; 
        }
    }

}