
/**
 * 
 * 构建一个共享对象代理
 * 
 * @import createProxy from object.proxy
 * 
 * @param {mixed} target 需要代理的对象
 * 
 * @return {object.Proxy} 代理
 * 
 */

 let proxy ;

 function main(target){

    if(!proxy){

        proxy = createProxy() ;
    }

    proxy.target = target ;

    return proxy ;
 }