/**
 * 
 * 基于 React 基于消息系统
 * 
 * @import getCenter from message.center
 * 
 * @import get from id.generate
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
        } = this.props ;

        currentAddress = currentAddress || address || get('address-');

        let messageAddress = center.register(currentAddress) ;

        let isBind = messageAddress.bind(me) ;

        if(!isBind){

            throw new Error(`${reactClass.name} 尝试注册已被占用的消息地址 ${currentAddress}`) ;
        }

        me.$address = messageAddress ;

        if (super.componentDidMount) {

            super.componentDidMount();
        }

    }

    componentWillUnmount(){

        if (super.componentWillUnmount) {

            super.componentWillUnmount();
        }

        let {
            $address:address
        } = this ;

        if(address){

            address.unbind() ;
        }
    }

}