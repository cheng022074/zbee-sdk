
/**
 * 
 * 内存版缓存
 * 
 * @import Cache from ..cache value
 * 
 * @import clone from data.clone
 * 
 * @param {object} options 配置
 * 
 */

 const cache = {} ;

 class main extends Cache{

    get cacheKey(){

        return `${schema}-${name}` ;
    }

    initCache(data){

        let {
            cacheKey
        } = this ;

        cache[cacheKey] = clone(data);
    }

    getCache(){

        let {
            cacheKey
        } = this ;

        return cache[cacheKey] ;
    }

    clearCache(){

        let {
            cacheKey
        } = this ;

        delete cache[cacheKey] ;
    }
 }