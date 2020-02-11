
/**
 * 
 * 数组代理
 * 
 * @import createProxy from object.proxy
 * 
 * @import from from array.from
 * 
 * @param {mixed} target 需要代理的对象
 * 
 * @return {array.Proxy} 代理对象引用 
 * 
 */

 function main(target){

    return new Proxy(target) ;
 }

 class Proxy extends Array{

    constructor(target){

        super() ;

        this.push(...from(target)) ;
    }

    includes(target){

        let proxies = this ;

        for(let proxy of proxies){

            if(proxy.target === target){

                return true ;
            }
        }

        return false ;
    }

    push(...items){

        let proxies = [] ;

        for(let item of items){

            proxies.push(createProxy(item)) ;
        }

        super.push(...proxies) ;
    }

    call(...args){

        doExecute(this , 'call' , ...args) ;
    }
 }

 function doExecute(proxies , method , ...args){

    for(let proxy of proxies){

        proxy[method](...args) ;
    }
 }