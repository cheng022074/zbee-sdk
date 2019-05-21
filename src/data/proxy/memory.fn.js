
/**
 * 
 * 内存数据代理
 * 
 * @param {object} options 配置
 * 
 * @import Proxy from data.proxy value
 * 
 */

 class main extends Proxy{

    get proxyType(){

        return 'memory' ;
    }

    doRead(data){

        return data; 
    }
 }