/**
 * 
 * 基于 React 的消息封装
 * 
 * @import get from message.address.storage
 * 
 * @import is.string
 * 
 * @import is.function
 * 
 * @param {string} address 绑定地址
 * 
 * @param {object} target React 配置类
 * 
 */

function getAddress(){

    let target ;

    if(isString(address)){

        target = get(address);
    
    }else if(isFunction(address)){

        target = get(address.call(this)) ;

    }

    return target ;
}

return class extends target {

    constructor(props){

        super(props) ;

        let me = this ;

        me.$address = getAddress.call(me) ;
    }

    componentDidMount(){

        let me = this ;

        me.$address.bind(me) ;

        if(super.componentDidMount){

            super.componentDidMount() ;
        }
    }

    componentWillUnMount(){

        if(super.componentWillUnMount){

            super.componentWillUnMount() ;
        }

        this.$address.unbind() ;
    }
} ;

