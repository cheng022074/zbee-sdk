
/**
 * 
 * 对象代理，如果对象没有需要的方法或者属性时，则会抛出异常
 * 
 * @param {mixed} target 需要代理的对象
 * 
 * @return {object.Proxy} 代理对象引用 
 * 
 */

 function main(target){

    return new Proxy(target) ;
 }

 class Proxy{

    constructor(target){

        this.target = target ;
    }

    call(method , ...args){

        let {
            target
        } = this ;

        if(method in target){

            return target[method](...args) ;
        
        }else{

            throw new ProxyMethodNotFoundError(target , method) ;
        }
    }

    callIf(method , ...args){

        let {
            target
        } = this ;

        if(method in target){

            return target[method](...args) ;
        }
    }

    set(name , value){

        let {
            target
        } = this ;

        if(name in target){

            target[name] = value ;
        
        }else{

            throw new ProxyPropertyNotFoundError(target , name , 'set') ;
        }
    }

    setIf(name , value){

        let {
            target
        } = this ;

        if(name in target){

            target[name] = value ;
        
        }
    }

    get(name){

        let {
            target
        } = this ;

        if(name in target){

            return target[name] ;
        
        }else{

            throw new ProxyPropertyNotFoundError(target , name , 'get') ;
        }
    }

    getIf(name){

        let {
            target
        } = this ;

        if(name in target){

            return target[name] ;
        
        }
    }

    fireEvent(name , ...args){

        let {
            target
        } = this ;

        if('fireEvent' in target){

            target.fireEvent(name , ...args) ;
        }
    }
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