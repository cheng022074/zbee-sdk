/**
 * 
 * 基于 React 基于消息系统
 * 
 * @import getCenter from message.center
 * 
 * @param {React.Component} reactClass 继承的 React 组件类
 * 
 * @param {string} [address] 组件注册的消息地址
 * 
 */

 let center = getCenter() ;

 return class extends reactClass{

    componentDidMount() {

        let me = this,
        {
            address:currentAddress
        } = this.props ;

        currentAddress = currentAddress || address ;

        if(!currentAddress){

            throw new Error(`${Target.name} 未注册消息地址`) ;
        }

        let messageAddress = center.register(currentAddress) ;

        let isBind = messageAddress.bind(me) ;

        if(!isBind){

            throw new Error(`${Target.name} 尝试注册已被占用的消息地址 ${currentAddress}`) ;
        }

        me.$address = messageAddress ;

        if (super.componentDidMount) {

            super.componentDidMount();
        }

    }

    componentWillUnmount(){

        if (super.componentWillUnMount) {

            super.componentWillUnMount();
        }

        let {
            $address:address
        } = this ;

        if(address){

            address.unbind() ;
        }
    }

}