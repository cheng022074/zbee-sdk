
/**
 * 
 * 对象代理，如果对象没有需要的方法或者属性时，则会抛出异常
 * 
 * @import add from event.listener.add
 * 
 * @import remove from event.listener.remove
 * 
 * @param {mixed} target 需要代理的对象
 * 
 * @param {mixed} [interceptor = {}] 需要代理的对象
 * 
 * @return {object.Proxy} 代理对象引用 
 * 
 */

 function main(target , interceptor){

    return new Proxy(target , interceptor) ;
 }

 class Proxy{

    constructor(target , interceptor){

        let me = this ;

        me.target = target ;

        me.interceptor = interceptor ;
    }

    call(method , ...args){

        return call.call(this , true , method , ...args) ;
    }

    callIf(method , ...args){

        return call.call(this , false , method , ...args) ;
    }

    set(name , value){

        set.call(this , true , name , value) ;
    }

    setIf(name , value){

        set.call(this , false , name , value) ;
    }

    get(name){

        return get.call(this , true , name) ;
    }

    getIf(name){

        return get.call(this , false , name) ;
    }

    fireEvent(name , ...args){

        this.callIf('fireEvent' , name , ...args) ;
    }

    on(...args){

        add(this.target , ...args) ;
    }

    off(...args){

        remove(this.target , ...args) ;
    }
 }

 function call(isThrowError , method , ...args){

    let me = this,
        {
            target
        } = me ;

    if(method in target){

        if(doIntercept.call(me , method , ...args)){

            return ;
        }

        return target[method](...args) ;
    
    }else if(isThrowError){

        throw new ProxyMethodNotFoundError(target , method) ;
    }
 }

 function set(isThrowError , name , value){

    let {
        target
    } = this ;

    if(name in target){

        if(doIntercept.call(me , name , value)){

            return ;
        }

        target[name] = value ;
    
    }else if(isThrowError){

        throw new ProxyPropertyNotFoundError(target , name , 'set') ;
    }
 }

 function get(isThrowError , name){

    let {
        target
    } = this ;

    if(name in target){

        return target[name] ;
    
    }else if(isThrowError){

        throw new ProxyPropertyNotFoundError(target , name , 'get') ;
    }
 }

 function doIntercept(method , ...args){

    let {
        target,
        interceptor
    } = this ;

    return method in interceptor && interceptor[method](target , ...args) === false;
 }

 class ProxyMethodNotFoundError extends Error{

    constructor(target , method){

        super(`无法访问名称为 ${method} 的方法`) ;

        let me = this ;

        me.proxyTarget = target ;

        me.proxyMethod = method ;

    }
 }

 class ProxyPropertyNotFoundError extends Error{

    constructor(target , property , mode){

        let modeMessage ;

        switch(mode){

            case 'set':

                modeMessage = '设置' ;

                break ;

            case 'get':

                modeMessage = '获取' ;
        }

        super(`无法${modeMessage}名称为 ${property} 的属性`) ;

        let me = this ;

        me.proxyTarget = target ;

        me.proxyProperty = property ;

    }
 }